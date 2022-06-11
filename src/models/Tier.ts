import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";

class Tier extends Model<InferAttributes<Tier>, InferCreationAttributes<Tier>> {
  declare id: CreationOptional<number>;

  declare name: string;

  declare description: string;

  static associate(): void {}
}

Tier.init({
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
  tableName: "sys_tiers",
});

export { Tier };
