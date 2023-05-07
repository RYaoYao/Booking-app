import express from "express";
import {createHotel, updateHotel, getHotel, getAllHotel, deleteHotel, countCities, countTypes} from "../contollers/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//create
router.post("/", verifyAdmin,createHotel)
//update
router.patch("/:id", verifyAdmin,updateHotel)
//get
router.get("/find/:id", getHotel)
router.get("/countByCity", countCities)
router.get("/countByType",countTypes)
//get all
router.get("/", getAllHotel)
//delete
router.delete("/:id", verifyAdmin,deleteHotel)

export default  router