import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";
import MyRestaurantRoute from "./routes/MyRestaurantRoute";
import { v2 as cloudinary } from "cloudinary";
import RestaurantRoute from "./routes/RestaurantRoute";
import OrderRoute from "./routes/OrderRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database"))
  .catch(console.error);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.send({ message: "Server is running" });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("/api/my/user", MyUserRoute);

app.use("/api/my/restaurant", MyRestaurantRoute);

app.use("/api/restaurant", RestaurantRoute);

app.use("/api/order", OrderRoute);

app.listen(7000, () => {
  console.log("Server is running on port localhost:7000");
});
