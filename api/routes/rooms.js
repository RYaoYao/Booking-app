import express from "express";
import {createRoom, updateRoom, getRoom, getAllRoom, deleteRoom, updateRoomAvail} from "../contollers/roomController.js"
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//create
router.post("/:hotelid", verifyAdmin,createRoom)
//update
router.patch("/:id", verifyAdmin,updateRoom)
router.put("/availability/:id",updateRoomAvail)
//get
router.get("/:id", getRoom)
//get all
router.get("/", getAllRoom)
//delete
router.delete("/:id/:hotelid", verifyAdmin,deleteRoom)

export default  router