import {Sequelize} from  'sequelize';
import config from '../Config/config.js';

const sequelize = new Sequelize(
config.db_database,
config.db_user,
config.db_pass,
{
dialect: config.db_dialect,
host: config.db_host,
port: config.db_port
});

export default sequelize;
