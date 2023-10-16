const { Router } = require("express");
const { activityController } = require("../controllers");
const { validator } = require("../middlewares");

const router = Router();
const { validate, requirements } = validator;

router
  .route("/")
  .post(
    [validate(requirements.createActivity)],
    activityController.createActivity,
  )
  .get(
    [validate(requirements.getActivities)],
    activityController.getActivities,
  );

router
  .route("/:id")
  .get([validate(requirements.getActivity)], activityController.getActivity);

// TODO: create route GET /activities/:id/items
router
  .route("/:id/items")
  .get(
    [validate(requirements.getActivityItems)],
    activityController.getActivityItems
  )

module.exports = router;
