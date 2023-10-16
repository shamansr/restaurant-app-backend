const express = require('express')
require('dotenv').config()
const app = express()
const signup = require('./src/routes/signup')
const { json } = require('sequelize')

app.use('/v1/api/signup',signup)

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
