import express from "express";
// import asyncHandler from "express-async-handler";
// import Product from "../models/productModel.js";
// import mongoose from "mongoose";
import { authUser, getUserProfile, registerUser, updateUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
