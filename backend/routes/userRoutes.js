import express from "express";
// import asyncHandler from "express-async-handler";
// import Product from "../models/productModel.js";
// import mongoose from "mongoose";
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers } from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
