const { activityRepositories, itemRepositories } = require("../repositories");

async function createActivity({ title }) {
  if (!title) {
    return Promise.reject(new Error("Title is empty"));
  }
  const activity = await activityRepositories.createActivity({
    title,
  });
  return activity;
}

async function getActivities({ page = 1, limit = 10 }) {
  if (page < 1 || limit < 1) {
    return Promise.reject(new Error("Invalid page and/or limit"));
  }
  const activities = await activityRepositories.getActivities({
    page,
    limit,
  });

  if (!activities.length) {
    return Promise.reject(new Error("Activity not found"));
  }

  return activities;
}

async function getActivity(id) {
  if (!id) {
    return Promise.reject(new Error("Invalid id"));
  }
  const activity = await activityRepositories.getActivity(id);

  if (!activity) {
    return Promise.reject(new Error("Activity not found"));
  }
  return activity;
}

// TODO: write function getActivityItems
async function getActivityItems(id, { page = 1, limit = 10 }) {
  if (!id) {
    return Promise.reject(new Error("Invalid id"));
  }

  if (page < 1 || limit < 1) {
    return Promise.reject(new Error("Invalid page and/or limit"));
  }

  const activityItems = await itemRepositories.getActivityItems(id, { page, limit });

  if (!activityItems.length) {
    return Promise.reject(new Error("Activity not found"));
  }

  return activityItems;
}

module.exports = {
  createActivity,
  getActivities,
  getActivity,
  getActivityItems,
};
