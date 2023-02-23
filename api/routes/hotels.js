import express from "express";
import {
  createHotel,
  deletHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controlls/hotelControll.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deletHotel);

//GET
router.get("/:id", getHotel);

//GETALL
router.get("/", getHotels);

export default router;
