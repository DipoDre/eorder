const { Router } = require("express");
const router = Router();
const ordersController = require("../controllers/orders.controller");

// Place Order.
router.post("/", ordersController.placeOrder);

// Place Order.
router.patch("/:id", ordersController.takeOrder);

// Get Order List.
router.get("/?page=:page&limit=:limit", ordersController.getOrderList);

module.exports = router;
