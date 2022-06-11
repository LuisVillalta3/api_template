import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";

class Case extends Model<InferAttributes<Case>, InferCreationAttributes<Case>> {
  declare id: CreationOptional<number>;

  declare track_code: string;

  declare user_id: number;

  declare tier_id: number;

  declare team_id: number;

  declare current_status_id: number;

  declare name: string;

  declare description: string;

  static associate(): void {}
}

Case.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  track_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "sys_users",
      key: "id",
    },
  },
  tier_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "ctl_tiers",
      key: "id",
    },
  },
  team_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "sys_teams",
      key: "id",
    },
  },
  current_status_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "ctl_statuses",
      key: "id",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  sequelize: db,
  tableName: "sys_cases",
});

export { Case };
