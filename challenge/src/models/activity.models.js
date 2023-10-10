const { DataTypes } = require("sequelize");
const sequelize = require("../utils/sequelize");

const Activity = sequelize.define(
  "Activity",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "activities",
    freezeTableName: true,
    timestamps: true,
  },
);

module.exports = Activity;
