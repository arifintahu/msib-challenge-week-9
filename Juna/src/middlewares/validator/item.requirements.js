const { body, param } = require("express-validator");

const requirements = {
  createItem: [
    body("activityId").isInt({ min: 1 }),
    body("title").isString().isLength({ min: 3 }),
    body("priority").isString().isIn(["low", "normal", "high"]),
  ],
  getItem: [param("id").isInt({ min: 1 })],

  // TODO: Add requirements for updateItem
  updateItem: [
    body("title").optional().isString().isLength({ min: 3 }),
    body("priority").optional().isString().isIn(["low", "normal", "high"]),
    body("isActive").optional().isBoolean(),
  ]
};

module.exports = requirements;
