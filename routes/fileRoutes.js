import expres from "express";
import { uploadfile, uploadMiddleware } from "../controllers/fileController.js";

const fileRoutes = expres.Router();

fileRoutes.post("/upload", uploadMiddleware("image"), uploadfile);

export default fileRoutes;
