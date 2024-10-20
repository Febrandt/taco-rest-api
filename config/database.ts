import {Sequelize} from "sequelize";

const sequelize = new Sequelize('taco', 'root', 'root', {
    host: 'localhost',
    dialect:'mariadb'
  });

try {
    await sequelize.authenticate();
    console.log('Connection to sequelize successfull');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

sequelize.sync({"alter": false})

export default sequelize;