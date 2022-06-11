import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";

class Status extends Model<InferAttributes<Status>, InferCreationAttributes<Status>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  static associate(): void {}
}

Status.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
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
  tableName: "sys_statuses",
});

export { Status };
