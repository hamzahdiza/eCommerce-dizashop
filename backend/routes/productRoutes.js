import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import mongoose from "mongoose";

const router = express.Router();

// @desc   Fetch all products
// @route  Get /api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc   Fetch all products
// @route  Get /api/products
// @access Public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
