const { MongoClient } = require('mongodb');

class Database {
  constructor() {
    this.client = null;
    this.config = null;
  }

  configure = async (config) => {
    this.config = config;
  
    const url = `mongodb://${config.hostname}:${config.port}`;
    this.client = new MongoClient(url, config.options);

    await this.client.connect();
    return this.client;
  };

  disconnect = async () => {
    return this.client.close();
  };

  getDb = () => {
    return this.client.db(this.config.database);
  };

}

module.exports = new Database();