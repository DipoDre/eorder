const db = require("../models");
const Order = db.order;

function checkIfStringHasOnlyDigits(_string) {
  if (_string.match(/^[0-9]+$/) != null) {
    console.log("String contains only numbers");
    return true;
  } else {
    return false;
  }
}

exports.placeOrder = async (req, res) => {
  const { origin, destination } = req.body;
  const [start_latitude, start_longitude] = origin;
  const [end_latitude, end_longitude] = destination;

  const newOrder = await Order.create({
    ...orderData,
  }).catch((err) => {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the Order.",
    });
  });

  if (newOrder) {
    res.json({ order: newOrder });
  } else {
    res.status(404).json({
      message: `The order was not created.`,
    });
  }
};

let visitCount = 0;
exports.takeOrder = async (req, res) => {
  if (visitCount == 0) {
  }
  visitCount++;
  // beginning
  const order = await Order.findOne({
    where: {
      id: id,
    },
  }).catch((err) => {
    res.status(500).json({
      message: "Error retrieving Product with id=" + id,
    });
  });

  if (product) {
    res.json({ product: product });
  } else {
    res.status(404).json({
      message: `Cannot find Product with id=${id}.`,
    });
  }

  //   ending

  const id = req.params.id;
  const { status } = req.body;
  if (status == "TAKEN") {
  }

  const numberOfUpdatedRows = await Order.update(req.body, {
    where: { id: id },
  }).catch((err) => {
    return res.status(500).json({
      error: "Error updating Order with id=" + id,
    });
  });

  if (numberOfUpdatedRows == 1) {
    return res.json({
      status: "SUCCESS",
    });
  } else {
    return res.json({
      error: `Cannot update Order with id=${id}. Maybe Order was not found or req.body is empty!`,
    });
  }
};

exports.getOrderList = async (req, res) => {
  let listPage = req.query.page;
  let listLimit = req.query.limit;

  if (
    checkIfStringHasOnlyDigits(listPage) &&
    checkIfStringHasOnlyDigits(listLimit)
  ) {
    let pageNumber = parseInt(listPage);
    let limitNumber = parseInt(listLimit);
    if (limitNumber > 0 && pageNumber > 0) {
      let listOffset = pageNumber * limitNumber;
      const orders = await Order.findAll({
        offset: listOffset,
        limit: limitNumber,
      }).catch((err) => {
        return res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving orders.",
        });
      });

      if (orders && order.length > 0) {
        return res.status(200).json({ orders });
      } else {
        let noResult = [];
        return res.status(200).json({
          noResult,
        });
      }
    } else {
      return res.status(500).json({
        error: "page or / and limit queries are invalid",
      });
    }
  } else {
    return res.status(500).json({
      error: "page or / and limit queries are invalid",
    });
  }
};
