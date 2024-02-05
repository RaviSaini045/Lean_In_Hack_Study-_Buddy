import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is Required"],
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required:true,
        unique: true,
    },
    avatar: {
      type: String,
      required: true,
    }, 
    password: {
        type: String,
        min: 8,
        required: true,
    },
    accessToken: {
      type: String,
      default: "",
    }
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password"))
        return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessTokens = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;