const baseURL = 'http://localhost:4646'

let chooseBtn = document.querySelector('#chooseBtn')
chooseBtn.elementToShow = ('actorContainer')
let randomBtn = document.querySelector('#randomBtn')
randomBtn.elementToShow = ('actorContainer')
let submitBtn = document.querySelector('#submitBtn')
submitBtn.elementToShow = ('actorContainer')
let deleteBtn = document.querySelector('#deleteBtn')
let addBtn = document.querySelector('#addBtn')
addBtn.elementToShow = ('actorForm')

const winnerDisplay = document.querySelector('#winnerDisplay')
const actorContainer = document.querySelector('#actorContainer')

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
        document.getElementById(res.data.name).classList.remove('hide')
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const addActor = (e) => {
    e.preventDefault()
   const radio = document.querySelector('input[name="flexRadioDefault"]:checked').id

    const obj = {
        name: document.querySelector('#name').value,
        nominations: document.querySelector('#nom').value,
        awards: document.querySelector('#awards').value,
        wouldHang: document.querySelector(`label[for=${radio}]`).textContent.trim(),
        imageURL: document.querySelector('#img').value
    }

    axios.post(`${baseURL}/allActors`, obj)
    .then((res) => {
        console.log(res.data)
        displayActors(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const deleteActor = id => {
    axios.delete(`${baseURL}/allActors/${id}`)
    .then((res) => {
        displayActors(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const createActorCard = actor => {   
    const actorContainer = document.querySelector('#actorContainer')
    const actorCard = document.createElement('div')
    actorCard.classList.add('actor-card')
    actorCard.id = (actor.name)
    
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
        <button class="btn btn-primary chooseActorBtn" onclick="displayWinner()">Choose actor</button>
    </div>
    `

    actorContainer.appendChild(actorCard)
}

const chooseActor = () => {
    
    axios.get(`${baseURL}/winner`)
    .then((res) => {
        const winnerPTag = document.querySelector('#winnerPTag')
        winnerDisplay.classList.remove('hide')
        actorContainer.classList.add('hide')
        winnerPTag.innerHTML = res.data
    })
    .catch((theseHands) => {
        console.log('CATCH')
        console.log(theseHands)
    })
}

const displayActors = (arr) => {
    console.log('displaying actors')
    console.log('data arr', arr)
    actorContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createActorCard(arr[i])
    }
}

const hideElements = (className) =>  {
    const hideable = document.querySelectorAll(className)
    for (i = 0; i < hideable.length; i++){
        if (!hideable[i].classList.contains('hide')){
            hideable[i].classList.add('hide')
        }
    }    
}

function toggleForm(id){
    const form = document.querySelector(`#${id}`);
    form.classList.toggle('hide');
}

const displayOne = (e) => {
    const displayingElement = e.target.elementToShow
    hideElements('.hideable')
    toggleForm(displayingElement)
    
}

const displayRandomActor = (e) => {
    console.log('displaying rando')
    displayOne(e)
    hideElements('.actor-card')
}

const displayNewList = (e) => {
    console.log('new list fn')
    displayOne(e)
    addActor(e)   
}

function pageSetup() {
    console.log('setting up')
    getAllActors()
    let chooseActorBtn = document.querySelectorAll('.chooseActorBtn')
    console.log(chooseActorBtn)
    for (i = 0; i < chooseActorBtn.length; i++){
        chooseActorBtn[i].addEventListener('click', displayOne)
    }
}

const displayWinner = () => {
    chooseActor()
}

pageSetup()

randomBtn.addEventListener('click', getRandomActor)
submitBtn.addEventListener('click', displayNewList)
addBtn.addEventListener('click', displayOne)
chooseBtn.addEventListener('click', displayOne)
randomBtn.addEventListener('click', displayRandomActor)




