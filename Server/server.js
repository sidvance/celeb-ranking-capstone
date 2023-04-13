//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())


//REST endpoints


//Start server
app.listen(4646, () => console.log('we\'re in business boys: 4646'))