// backend/models/Employer.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Employer = sequelize.define("Employer", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Employer;
