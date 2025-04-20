import express from "express";
import {
  matchFoodListings,
  confirmDeliveryAndMintNFT,
} from "../controllers/transactions.controller.mjs";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/confirm-delivery/:transactionId",
  authMiddleware,
  confirmDeliveryAndMintNFT
);

router.post("/match", matchFoodListings);

export default router;
