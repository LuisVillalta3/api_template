module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mnt_roles_permissions", {
      id_role: {
        type: Sequelize.INTEGER,
        references: {
          model: "mnt_roles",
          key: "id",
        },
      },
      id_permission: {
        type: Sequelize.INTEGER,
        references: {
          model: "mnt_permissions",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("mnt_roles_permissions");
  },
};
