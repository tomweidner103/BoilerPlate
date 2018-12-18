const Sequelize = require('sequelize')

//for heroku deployment
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/mattsNumbers', {
    logging: false
})

module.exports = db