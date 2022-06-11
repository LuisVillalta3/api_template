import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
  DataTypes,
} from "sequelize";
import { db } from "@config/db";
// import { User } from "./User";

class Team extends Model<InferAttributes<Team>, InferCreationAttributes<Team>> {
  declare id: CreationOptional<number>;

  declare name: string;

  static associate(): void {
    // this.belongsToMany(User, {
    //   through: "sys_teams_users",
    //   foreignKey: "team_id",
    //   otherKey: "user_id",
    // });
  }
}

Team.init({
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
  tableName: "sys_teams",
});

export { Team };
