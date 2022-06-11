module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cases_histories", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "ctl_statuses",
          key: "id",
        },
      },
      case_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sys_cases",
          key: "id",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sys_users",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sys_cases_histories");
  },
};
