const { activityServices } = require("../services");

async function createActivity(req, res, next) {
  try {
    const result = await activityServices.createActivity(req.body);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function getActivities(req, res, next) {
  try {
    const result = await activityServices.getActivities(req.query);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function getActivity(req, res, next) {
  try {
    const id = req.params.id;
    const result = await activityServices.getActivity(id);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

// TODO: write function getActivityItems
async function getActivityItems(req, res, next) {
  try {
    const id = req.params.id;
    const { page, limit } = req.query;
    const result = await activityServices.getActivityItems(id, { page, limit });
    res.json({
      status: "success",
      data: result
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createActivity,
  getActivities,
  getActivity,
  getActivityItems,
};
