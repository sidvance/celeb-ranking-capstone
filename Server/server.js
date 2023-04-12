const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.listen(4646, () => console.log('we\'re in business boys: 4646'))

//REST endpoints