const { Activity } = require("../models");

async function createActivity({ title }) {
  return Activity.create({
    title,
  });
}

async function getActivities({ page, limit }) {
  const offset = (page - 1) * limit;
  return Activity.findAll({
    attributes: ["id", "title"],
    limit: limit,
    offset: offset,
  });
}

async function getActivity(id) {
  return Activity.findByPk(id);
}

module.exports = {
  createActivity,
  getActivities,
  getActivity,
};
