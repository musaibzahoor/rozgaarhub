import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Job = sequelize.define("Job", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  wage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Job;
