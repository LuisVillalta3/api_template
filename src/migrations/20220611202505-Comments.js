module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_comments", {
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
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sys_users",
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
      message: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sys_comments");
  },
};
