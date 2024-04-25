import { Sequelize } from "sequelize";

const db = new Sequelize('ardika', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',

});
export default db;