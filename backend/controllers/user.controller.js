import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import User from "../models/user.model.js";
import { options } from "../utils/constants.js";

const registerUser = asyncHandler( async (req, res, next) => {
    const {username, email, name, avatar, password} = req.body;
    if(
        [username, email, name, avatar, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are Required")
    }

    const user = await User.findOne({
        $or: [{email}, {username}]
    });
    if(user)
        throw new ApiError(403,"User Already Registered");
    console.log(req.file.avatar,req.files)
    const avatarLocalFilePath = req.file?.path;
    if(!avatarLocalFilePath)
        throw new ApiError(400, "Avatar Img is Required");

    const avatarUrl = await uploadOnCloudinary(avatarLocalFilePath)
    if(!avatarUrl)
        throw new ApiError(500, "Error at Server Side While Uploading the Image")
    const registeredUSer = await User.create({
        name,
        email,
        username,
        avatar: avatarUrl.url,
        password,
    });
    if(!registeredUSer)
        throw new ApiError(500,"Unable to SAve User")
    const newUser = await User.findById(registeredUSer._id).select("-password -accessToken")
    return res
    .status(200)
    .json(
        new ApiResponse(200,"User Registered Successfully", newUser)
    )
});

const logInUser = asyncHandler(async (req, res, next) => {
    const {username, password} = req.body;
    console.log(username,password);
    if(!username.trim() || !password.trim())
        throw new ApiError(401, "All Fields are Required");
    const user = await User.findOne({username});
    if(!user)
        throw new ApiError(403, "User not Registered");
    const validate = await user.isPasswordCorrect(password);
    if(!validate)
        throw new ApiError(403, "Invalid Credentials");
    
    const token = await user.generateAccessTokens();
    user.accessToken = token;
    await user.save({validateBeforeSave: false});
    const loggedInUser = await User.findById(user._id);
    return res
    .status(200)
    .cookie("accessToken", token, options)
    .json(
        new ApiResponse(200, "User Logged in Successfully")
    )
});

const logOutUser = asyncHandler(async ( req, res, next) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                accessToken: undefined,
            }
        },
        {
            new: true,
        }
    );

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(
        new ApiResponse(
            200, "User Logged Out Successfully", {}
        )
    )
});

const updateUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
    if(!oldPassword.trim() || !newPassword.trim())
        throw new ApiError(400, "All Fields aare Required")

  const user = await User.findById(req.user?._id);

  const validPassword = await user.isPasswordCorrect(oldPassword);
  if (!validPassword) throw new ApiError(400, "Password Entered is Wrong");

  user.password = newPassword;
  user.accessToken = undefined;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .clearCookie("accessToken",options)
    .json(new ApiResponse(200, {}, "Password Updated Succesfully"));
});

export {
    registerUser,
    logInUser,
    logOutUser,
    updateUserPassword,
}