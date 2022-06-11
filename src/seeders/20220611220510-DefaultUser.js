const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("mnt_roles", [{
      name: "Default",
    }], {});

    await queryInterface.bulkInsert("sys_users", [{
      name: "Admin",
      email: "admin@system.com",
      password: bcrypt.hashSync("admin"),
      code: "admin",
      role_id: 1,
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("sys_users", null, {});
  },
};
