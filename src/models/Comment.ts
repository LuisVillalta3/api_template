import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";

class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>> {
  declare id: CreationOptional<number>;

  declare status_id: number;

  declare user_id: number;

  declare case_id: number;

  declare message: string;

  declare created_at: Date;

  static associate(): void {}
}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "ctl_statuses",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "sys_users",
      key: "id",
    },
  },
  case_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "sys_cases",
      key: "id",
    },
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false,
  deletedAt: false,
  sequelize: db,
  tableName: "sys_comments",
});

export { Comment };
