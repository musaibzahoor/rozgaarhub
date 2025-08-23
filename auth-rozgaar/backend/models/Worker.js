// models/Worker.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Worker = sequelize.define("Worker", {
  name: { type: DataTypes.STRING, allowNull: false },
  skill: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
});

export default Worker;
