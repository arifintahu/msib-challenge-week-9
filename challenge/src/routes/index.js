const { Router } = require("express");
const activityRoutes = require("./activity.routes");

const router = Router();

router.use("/activities", activityRoutes);

module.exports = router;
