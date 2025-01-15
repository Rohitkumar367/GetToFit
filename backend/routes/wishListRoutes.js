
import express from 'express'
import { addToWishlist, deleteWishlist, getToWishlist } from '../controllers/authControllers.js';

const router = express.Router();

router.get("/wishlist/:userId", getToWishlist);

router.post("/wishlist", addToWishlist);

router.delete("/wishlist", deleteWishlist);

export default router