import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Comments from '../app/models/Comments';
import Contact from '../app/models/Contact';

const models = [Comments, Contact];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
