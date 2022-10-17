import express from "express";
// import asyncHandler from "express-async-handler";
// import Product from "../models/productModel.js";
// import mongoose from "mongoose";
import { authUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/login", authUser);

export default router;
