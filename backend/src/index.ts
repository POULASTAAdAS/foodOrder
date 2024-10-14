import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("connected to backend"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(process.env.PORT || 8081, () => {
  console.log(`Server is running on port ${process.env.PORT}...`);
});
