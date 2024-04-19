import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadMiddleware = (fieldName) => upload.single(fieldName);

const uploadfile = (req, res) => {
  cloudinary.uploader.upload();
  cloudinary.uploader
    .upload_stream(
      {
        resource_type: "auto",
        folder: process.env.CLOUDINARY_FOLDER,
      },
      (error, result) => {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ error: "Hubo un error al subir la imagen" });
        }
        // Devolver la URL de la imagen en Cloudinary
        res.json({ url: result.secure_url });
      }
    )
    .end(req.file.buffer);
};

export { uploadfile, uploadMiddleware };
