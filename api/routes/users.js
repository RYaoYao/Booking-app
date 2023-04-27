import express from "express";
import {updateUser, getUser, getAllUser, deleteUser} from "../contollers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=> {
    res.send("User logged in")
})
router.get("/checkuser/:id", verifyUser, (req,res,next)=> {
    res.send("hello user you are logged in and can delete your account")
})
router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=> {
    res.send("hello admin you are logged in and can delete all account")
})
//update
router.patch("/:id",verifyUser,updateUser)
//get
router.get("/:id",verifyUser, getUser)
//get all
router.get("/",verifyAdmin,getAllUser)
//delete
router.delete("/:id", verifyUser,deleteUser)

export default  router