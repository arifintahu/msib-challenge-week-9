const { Item, Activity } = require("../models");

async function createItem({ activityId, title, priority }) {
  return Item.create({
    activityId,
    title,
    priority,
  });
}

async function updateItem(id, { title, priority, isActive }) {
  return Item.update(
    {
      title,
      priority,
      isActive,
    },
    {
      where: {
        id,
      },
    },
  );
}

async function getItem(id) {
  return Item.findByPk(id);
}

// TODO: write function getActivityItems with pagination
async function getActivityItems(id, { page, limit }) {
  const offset = (page - 1) * limit;
  return Item.findAll({
    where: {
      activityId: id,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    limit: limit,
    offset,
  });
}

module.exports = {
  createItem,
  updateItem,
  getItem,
  getActivityItems
};
