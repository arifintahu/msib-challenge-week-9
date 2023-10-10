const { DataTypes } = require('sequelize');
const sequelize = require("../utils/sequelize");
const Activity = require("./activity.models")

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Activity,
            key: "id"
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    priority: {
        type: DataTypes.ENUM("high", "normal", "low"),
        allowNull: false,
        defaultValue: "normal",
    }
}, {
    tableName: 'items',
    freezeTableName: true,
    timestamps: true,
});

module.exports = Item;
