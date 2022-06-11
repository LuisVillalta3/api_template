module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_teams", {
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
    await queryInterface.dropTable("sys_teams");
  },
};
