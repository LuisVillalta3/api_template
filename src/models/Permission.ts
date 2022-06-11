import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";

class Permission extends Model<InferAttributes<Permission>, InferCreationAttributes<Permission>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare code: string;

  declare description: string;
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
});

export { Permission };
