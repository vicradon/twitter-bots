const axios = require('axios')
const express = require('express')

const app = express()


app.get('/', async (req, res) => {
    await axios.get('/')

})


app.post('/', async (req, res) => {
    await axios.get('/')

})
