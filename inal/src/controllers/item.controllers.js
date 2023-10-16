const { itemServices } = require("../services");

async function createItem(req, res, next) {
  try {
    const result = await itemServices.createItem(req.body);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

async function getItem(req, res, next) {
  try {
    const id = req.params.id;
    const result = await itemServices.getItem(id);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

// TODO: write function updateItem
async function updateItem(req, res, next) {
  try {
    const {id} = req.params;
    const {title, priority, isActive} = req.body
    console.log(id, title,priority, isActive)
    const result = await itemServices.updateItem(id, title, priority, isActive);
    res.json({
      status: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createItem,
  getItem,
  updateItem
};
