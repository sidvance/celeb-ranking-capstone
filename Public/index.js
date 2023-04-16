//axios endpoint requests and response handling. Listening for requests sent from backend

const baseURL = 'http://localhost:4646'

//Interactive js. Grab html element. Write fn. Add event listener.

let chooseBtn = document.querySelector('#chooseBtn')
let randomBtn = document.querySelector('#randomBtn')
let submitBtn = document.querySelector('#submitBtn')
// let deleteBtn = document.querySelector('#deleteBtn')
// let actorContainer = document.querySelector('#actorContainer')


const getAllActors = () => {
    axios.get(`${baseURL}/allActors`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
}

const getRandomActor = () => {
    axios.get(`${baseURL}/actor`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const addActor = (e) => {
    e.preventDefault()

    axios.post(`${baseURL}/allActors`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const deleteActor = ()  => {
    axios.delete(`${baseURL}/allActors`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}


chooseBtn.addEventListener('click', getAllActors)
randomBtn.addEventListener('click', getRandomActor)
submitBtn.addEventListener('click', addActor)
// deleteBtn.addEventListener('click', deleteActor)


