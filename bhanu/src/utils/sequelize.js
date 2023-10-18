const { Sequelize } = require("sequelize");
const logger = require("./logger");

const sequelize = new Sequelize("sqlite::memory:", {
  logging: (sql) => logger.debug(sql),
});

module.exports = sequelize;
