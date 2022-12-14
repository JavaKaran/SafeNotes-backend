import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import path from "path";
import cors from "cors";

import noteRoutes from "./api/noteRoutes.js";
import userRoutes from "./api/userRoutes.js";
import externalRoutes from "./api/externalRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

app.use("/api/external", externalRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);

export default app;