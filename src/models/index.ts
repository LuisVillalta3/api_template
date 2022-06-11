import { Permission } from "@models/Permission";
import { Role } from "@models/Role";
import { User } from "@models/User";
import { Case } from "./Case";
import { CaseHistory } from "./CaseHistory";
import { Comment } from "./Comment";
import { Status } from "./Status";
import { Team } from "./Team";
import { Tier } from "./Tier";

Permission.associate();
Role.associate();
User.associate();
Team.associate();
Tier.associate();
Status.associate();
Case.associate();
CaseHistory.associate();
Comment.associate();

export {
  Permission,
  Role,
  User,
  Team,
  Tier,
  Status,
  Case,
  CaseHistory,
  Comment,
};
