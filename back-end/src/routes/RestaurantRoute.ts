import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .trim()
    .notEmpty()
    .withMessage("City param must be a valid string"),
  RestaurantController.getRestaurant
);
router.get(
  "/search/:city",
  param("city")
    .trim()
    .notEmpty()
    .withMessage("City param must be a valid string"),
  RestaurantController.searchRestaurant
);

export default router;
