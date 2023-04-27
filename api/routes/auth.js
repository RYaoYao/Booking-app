import express from "express";
import { login, register } from "../contollers/authController.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Hello this is for authetication")
})

router.post("/login", login)

router.post("/register", register)

export default router