module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_cases", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      track_code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sys_users",
          key: "id",
        },
      },
      tier_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ctl_tiers",
          key: "id",
        },
      },
      team_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sys_teams",
          key: "id",
        },
      },
      current_status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ctl_statuses",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sys_cases");
  },
};
