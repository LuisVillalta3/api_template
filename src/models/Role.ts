import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";
// import { Permission } from "./Permission";

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
  declare id: CreationOptional<number>;

  declare name: string;

  static associate(): void {
    // this.belongsToMany(Permission, {
    //   through: "mnt_roles_permissions",
    //   foreignKey: "id_role",
    //   otherKey: "id_permission",
    // });
  }
}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  sequelize: db,
  tableName: "mnt_roles",
});

export { Role };
