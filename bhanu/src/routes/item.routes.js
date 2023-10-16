const { Router } = require("express");
const { itemController } = require("../controllers");
const { validator } = require("../middlewares");

const router = Router();
const { validate, requirements } = validator;

router
  .route("/")
  .post([validate(requirements.createItem)], itemController.createItem);

router
  .route("/:id")
  .get([validate(requirements.getItem)], itemController.getItem);

// TODO: create route PUT /items/:id
router
  .route('/:id')
  .put([validate(requirements.updateItem)], itemController.updateItem);

module.exports = router;
