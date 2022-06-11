module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mnt_roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("mnt_roles");
  },
};
