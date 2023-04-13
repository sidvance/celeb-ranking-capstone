//Require packages
const express = require('express')
const cors = require('cors')

//App instance
const app = express()

//Middleware
app.use(express.json())
app.use(cors())


//REST endpoints. Destructure fc from controller. Then write actual endpoint.
const {getRandomActor, getAllActors, addActor, deleteActor} = require('./controller')

app.get('/actor', getRandomActor)
app.get('/allActors', getAllActors)
app.post('/allActors', addActor)
app.delete('/allActors', deleteActor)

//Start server
app.listen(4646, () => console.log('we\'re in business boys: 4646'))