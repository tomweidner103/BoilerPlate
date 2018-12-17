// entry point for server

const path = require('path')
const express = require('express')
const app = express()
const volleyball = require('volleyball')

// logging middleware

app.use(express.json())
app.use(volleyball)

// static middleware

app.use(express.static(path.join(__dirname, '..', 'public')))

// parsing middleware
app.use(express.urlencoded({ extended: true }))

//requiring the index.js in api folder

app.use('/api', require('./api'))

//send index.html

app.get('*', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// sending 500 errors

app.use((err,req,res,next) =>{
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || "Internal server error.")
})

//set up port listening

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Knock, knock')
    console.log("who's there?")
    console.log(`Your server, listening on port ${port}`)
})

module.exports = app