import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";

// connect Mongodb
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("Contected with Mongo DB");
//   } catch (error) {
//     throw error;
//   }
// };

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongodb discontected");
});

mongoose.connection.on("connected", () => {
  console.log("Mongodb connected");
});

// use Middle ware

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/hotels", hotelsRouter);

// USE ERROR HANDLER MIDLEWARE
app.use((err, req, res, next) => {
  const ErroStatus = err.status || 500;
  const errorMessage = err.message || "Something goging wrong";
  return res.status(ErroStatus).json({
    success: false,
    errorStatus: ErroStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// create listen
app.listen(8800, () => {
  connect();
  console.log("Connected with Backend?");
});
