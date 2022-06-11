import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";
// import { Role } from "@models/Role";

class Permission extends Model<InferAttributes<Permission>, InferCreationAttributes<Permission>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare code: string;

  declare description: string;

  static associate(): void {
    // this.belongsToMany(Role, {
    //   through: "mnt_roles_permissions",
    //   foreignKey: "id_permission",
    //   otherKey: "id_role",
    // });
  }
}

Permission.init({
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
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  sequelize: db,
  tableName: "mnt_permissions",
});

export { Permission };
