const { Router } = require("express");
const activityRoutes = require("./activity.routes");
const itemRoutes = require("./item.routes");

const router = Router();

router.use("/activities", activityRoutes);
router.use("/items", itemRoutes);

module.exports = router;
