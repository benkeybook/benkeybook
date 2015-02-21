module.exports = {
  cookieSecret: 'benkeybook',
  mongo: {
    development: {
      connectionString: 'mongodb://admin:123456@ds062097.mongolab.com:62097/benkeybook'
    },
    production: {
      connectionString: ''
    }
  }
};