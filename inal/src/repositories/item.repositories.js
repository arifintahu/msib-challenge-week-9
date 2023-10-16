const { Item } = require("../models");

async function createItem({ activityId, title, priority }) {
  return Item.create({
    activityId,
    title,
    priority,
  });
}

async function updateItem(aidi, { title, priority, isActive }) {
  const id = Number(aidi)
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

module.exports = {
  createItem,
  updateItem,
  getItem,
};
