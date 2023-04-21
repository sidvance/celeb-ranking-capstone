let actors = require('./db.json')
let globalID = 22;
let winnerArr = ['I\'m shocked! This is so unexpected!', 'He probably has a great personality, too.', 'I heard he\'s also a family man.', 'You did it! Congratualations! World\'s best actor!']

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
        const {name, nominations, awards, wouldHang, imageURL} = req.body
        console.log(req.body)
        //creat new obj as template for new actor in array
        let newActor = {
            name,
            nominations,
            awards,
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
        const {id} = req.params
        let i = actors.findIndex((elem) => elem.id === +id)
        actors.splice(i, 1)
        res.status(200).send(actors)
    },
    
    chooseActor: (req, res) => {
        // for (let i = 0; i < winnerArr.length; i++)
        // res.status(200).send(`Christian Bale won! ${winnerArr[i]}`)
        let index = Math.floor(Math.random() * winnerArr.length) 
        let winner = winnerArr[index]
        res.status(200).send(`Christian Bale won! ${winner}`)
    }
}

//this is where you'll create GET functionality