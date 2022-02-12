"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(
      "products",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        product_name: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        product_description: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING,
        },
        product_varieties: {
          allowNull: false,
          type: Sequelize.DataTypes.JSON,
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      },
      {
        timestamps: true,
        underscored: true,
      }
    );

    await queryInterface.renameColumn("products", "createdAt", "date_uploaded");

    await queryInterface.renameColumn("products", "updatedAt", "date_edited");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("products");
  },
};
