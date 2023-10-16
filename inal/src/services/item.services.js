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
async function updateItem(id, title, priority, isActive) {
  if (!id) {
    return Promise.reject(new Error("Invalid arguments"));
  }
  const item = await itemRepositories.updateItem(id,{
    title,
    priority,
    isActive,
  });
  const get = await itemRepositories.getItem(id);

  if (!get) {
    return Promise.reject(new Error("Item not found"));
  }
  return get;
}

async function getItems({ page = 1, limit = 10 }) {
  if (page < 1 || limit < 1) {
    return Promise.reject(new Error("Invalid page and/or limit"));
  }
  const items = await itemRepositories.getItems({
    page,
    limit,
  });
  return items
}

module.exports = {
  createItem,
  getItem,
  updateItem,
  getItems
};
