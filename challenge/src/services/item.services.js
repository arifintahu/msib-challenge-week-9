const { itemRepositories } = require("../repositories");
const activityServices = require("./activity.services");

async function createItem({ activityId, title, priority }) {
  if (!activityId || !title || !priority) {
    return Promise.reject(new Error("Invalid arguments"));
  }

  const activity = await activityServices.getActivity(activityId);
  if (!activity) {
    return Promise.reject(new Error("Activity not found"));
  }

  const item = await itemRepositories.createItem({
    activityId,
    title,
    priority,
  });
  return item;
}

async function getItem(id) {
  if (!id) {
    return Promise.reject(new Error("Invalid id"));
  }
  const item = await itemRepositories.getItem(id);

  if (!item) {
    return Promise.reject(new Error("Item not found"));
  }
  return item;
}

// TODO: write function updateItem

// TODO: write function getItemsByActivityId

module.exports = {
  createItem,
  getItem,
};
