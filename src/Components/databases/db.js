const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://default:qo9mMNHRySQ8@ep-raspy-leaf-a1ogsg7r.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require', {
  dialect: 'postgres',
});

module.exports = sequelize;
