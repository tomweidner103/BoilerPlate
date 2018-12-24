const Sequelize = require('sequelize')
const db = require('../db')

const Pictures = db.define('picture', {
    imageUrl: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
    }
})


module.exports = Pictures