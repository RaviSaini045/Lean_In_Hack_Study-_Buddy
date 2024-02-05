import { v2 as cloudinary } from "cloudinary";
import { Console } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: `learning177`,
  api_key: `315654314936695`,
  api_secret: `--u3vcp7urfLlEMrxy4qL4J-RHI`,
  secure: true,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
