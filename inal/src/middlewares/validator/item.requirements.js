const { body, param, query } = require("express-validator");

const requirements = {
  createItem: [
    body("activityId").isInt({ min: 1 }),
    body("title").isString().isLength({ min: 3 }),
    body("priority").isString().isIn(["low", "normal", "high"]),
  ],
  getItem: [param("id").isInt({ min: 1 })],

  // TODO: Add requirements for updateItem
  updateItems: [
    param("id").isInt({ min: 1 }),
  ],
  getItems: [
    query("page").isInt({ min: 1 }).optional({ nullable: true }),
    query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
  ],
};

module.exports = requirements;
