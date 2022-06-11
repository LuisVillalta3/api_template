module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_teams_users", {
      team_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sys_teams",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sys_users",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sys_teams_users");
  },
};
