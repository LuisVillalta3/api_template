module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sys_comments_replies", {
      comment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sys_comments",
          key: "id",
        },
      },
      reply_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "sys_comments",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("sys_comments_replies");
  },
};
