// const { DataTypes } = require("sequelize");
// const sequelize = require("../database/connection");

module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = Sequelize;
  const order = sequelize.define(
    "Order",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      total_distance: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      // origin: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      // },
      // destination: {
      //   allowNull: false,
      //   type: DataTypes.STRING,
      // },
      status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: "date_uploaded",
      updatedAt: "date_edited",
    }
  );

  return order;
};

// module.exports = product;
