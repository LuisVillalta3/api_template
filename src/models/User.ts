import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";
import { Role } from "./Role";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare email: string;

  declare password: string;

  declare code: string;

  declare role_id: number;

  static associate(): void {
    this.belongsTo(Role, {
      foreignKey: "role_id",
      targetKey: "id",
    });

    this.belongsToMany(User, {
      through: "sys_teams_users",
      foreignKey: "user_id",
      otherKey: "team_id",
    });
  }
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "mnt_roles",
      key: "id",
    },
  },
}, {
  timestamps: false,
  sequelize: db,
  tableName: "sys_users",
});

export { User };
