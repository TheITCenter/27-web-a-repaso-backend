import express from "express";
import authRoutes from "./routes/authRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

const api = express();

api.use(express.json());

api.use("/auth", authRoutes);

api.use("/file", fileRoutes);

api.listen(8000, () => {
  console.log("Servidor corriendo en puerto 8000");
});

console.log(process.env.CLOUDINARY_URL);
