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
  const id = req.params.id;

  try {
    const updatedItem = await itemServices.updateItem(id, req.body);

    res.status(200).json({
      status: 'success',
      data: updatedItem,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createItem,
  getItem,
  updateItem
};
