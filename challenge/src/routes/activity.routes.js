const { Router } = require("express");
const { activityController } = require("../controllers");

const router = Router();

router.route("/")
    .post(activityController.createActivity)
    .get(activityController.getActivities)

router.route("/:id")
    .get(activityController.getActivity)

module.exports = router;
