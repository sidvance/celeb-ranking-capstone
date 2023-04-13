let actors = require('./db.json')
let globalID = 22;
let UserActor = [];
let choices = [];

module.exports = {
    getRandomActor: (req, res) => {

        //get a random index for object in actor array
        let index = Math.floor(Math.random() * actors.length)
        //get the object for that index
        let actor = actors[index]
        //send actor to front end
        res.status(200).send(actor)
    },

    getAllActors: (req, res) => {
        res.status(200).send(actors)
    },

    addActor: (req, res) => {
        //destructuring key value pairs from actors array
        const {name, nominations, awards, genres, attractive, wouldHang, imageURL} = req.body
        //creat new obj as template for new actor in array
        let newActor = {
            name,
            nominations,
            awards,
            genres,
            attractive,
            wouldHang,
            imageURL,
            id: globalID
        }

        //add new actor to actors array
        actors.push(newActor)
        globalID++;
        //send the appended actors array to the front
        res.status(200).send(actors)
    },

    deleteActor: (req, res) => {
        //???????????????????????????????????????
        const {id} = req.params
        let i = actors.findIndex((elem) => elem.id === +id)
        actors.splice(i, 1)
        res.status(200).send(actors)
    },

    chooseActor: (req, res) => {
        if (UserActor.length === 1){
            return alert("You can only choose one actor!")
        }
        //find the index of the 
        let index = choices.findIndex

        res.status(200).send(SOMETHING)
    }
}

//this is where you'll create GET functionality