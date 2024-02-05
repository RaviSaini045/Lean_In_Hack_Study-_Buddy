import asynsHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import Doubt from "../models/doubt.model.js";

const postDoubt = asynsHandler(async (req,res,next) =>{
    const { description, title, category } = req.body;
    // console.log(typeof(category));
    let cat = category.split(',');
    // console.log(cat, typeof(cat));
    if(category.length < 0 && (
        !description.trim() || !category.trim() || !title.trim()
    ))
        throw new ApiError(400,"All fields are Required")
    const imgUpload = async () => {
      try {
        const arr = await Promise.all(
          (req.files || []).map(async (imgLink) => {
            const localPath = imgLink.path;
            const imgUrl = await uploadOnCloudinary(localPath);
            if (!imgUrl) {
              throw new ApiError(500, "Unable to upload Images");
            }
            return imgUrl.url;
          })
        );
        return arr;
      } catch (error) {
        throw new ApiError(500, "Unable to upload Images");
      }
    };

    const doubtImg = await imgUpload();
    console.log(doubtImg);

    if(!doubtImg)
        throw new ApiError(500,  "Image Upload Failed")

    const doubt = await Doubt.create({
        owner: req.user._id,
        title,
        doubtImg,
        description,
        category: cat,
    })
    if(!doubt)
        throw new ApiError(500, "Unable to save the detatils")

    return res
    .status(200)
    .json(
        new ApiResponse(200, "Uploaded Successfully", doubt)
    )
})

const getDoubt = asynsHandler( async (req, res, next) => {
    const doubt = await Doubt.find({});
    if(!doubt)
        throw new ApiError(500,"Something went Wrong")

    return res
    .status(200)
    .json(
        new ApiResponse(
            200, "Doubts Fetched", doubt
        )
    )
})

export {
    postDoubt,
    getDoubt,
}