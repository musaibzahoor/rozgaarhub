// backend/config/db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("authdb", "postgres", "Musaib", {
  host: "localhost",
  dialect: "postgres"
});

export default sequelize;

