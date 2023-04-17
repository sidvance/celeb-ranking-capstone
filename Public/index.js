//axios endpoint requests and response handling. Listening for requests sent from backend

const baseURL = 'http://localhost:4646'

//Interactive js. Grab html element. Write fn. Add event listener.

let chooseBtn = document.querySelector('#chooseBtn')
let randomBtn = document.querySelector('#randomBtn')
let submitBtn = document.querySelector('#submitBtn')
let deleteBtn = document.querySelector('#deleteBtn')
// let actorContainer = document.querySelector('#actorContainer')


const getAllActors = () => {
    axios.get(`${baseURL}/allActors`)
        .then((res) => {
            console.log(res.data)
            displayActors(res.data)
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
    console.log('deleting!!!')
    axios.delete(`${baseURL}/allActors`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const createActorCard = actor => {   
    const actorContainer = document.querySelector('#actorContainer')
    const actorCard = document.createElement('div')
    actorCard.classList.add('actor-card')
    
    actorCard.innerHTML = 
    `<img alt='actor cover image' src=${actor.imageURL} class="img-fluid actor-card-img"/>
    <p class="actorName">${actor.name}</p>
    <div class="nomsContainer">
        <p class="noms">Nominations: ${actor.nominations}</p>
        <p class="awards">Awards: ${actor.awards}</p>
    </div>
    <p class="wouldHang">Would you want to hang out with them in real life? ${actor.wouldHang}</p>
    <div class="btns-container">
        <button id="deleteBtn" class="btn btn-primary" onclick="deleteActor(${actor.id})">Delete</button>
        <button id="chooseBtn" class="btn btn-primary" onclick="chooseActor(${actor.id})">Choose actor</button>
    </div>
    `

    actorContainer.appendChild(actorCard)
}

const displayActors = (arr=[]) => {
    console.log('data arr', arr)
    actorContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createActorCard(arr[i])
    }
}

function pageSetup() {
    getAllActors()
}


// chooseBtn.addEventListener('click', getAllActors)
randomBtn.addEventListener('click', getRandomActor)
submitBtn.addEventListener('click', addActor)
// deleteBtn.addEventListener('click', deleteActor)
pageSetup()


