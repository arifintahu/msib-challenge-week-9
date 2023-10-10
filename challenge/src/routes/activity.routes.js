const { Router } = require("express");
const { activityController } = require("../controllers");
const { validator } =  require("../middlewares");

const router = Router();
const { validate, requirements } = validator

router.route("/")
    .post([ validate(requirements.createActivity) ], activityController.createActivity)
    .get([ validate(requirements.getActivities) ], activityController.getActivities)

router.route("/:id")
    .get([ validate(requirements.getActivity) ], activityController.getActivity)

module.exports = router;
