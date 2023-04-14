//axios endpoint requests and response handling. Listening for requests sent from backend

const baseURL = 'http://localhost:4646'

//Interactive js. Grab html element. Write fn. Add event listener.

let chooseBtn = document.querySelector('#chooseBtn')
let randomBtn = document.querySelector('#randomBtn')
let addBtn = document.querySelector('#addBtn')
let mainSection = document.querySelector('#mainSection')


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

const addActor = () => {
    axios.post(`${baseURL}/allActors`)
    .then((res) => {
        console.log(res.data)
        //loop over res.data and create input fields for each property
        // for(let i = 0; i < res.data.length; i++){
        //     let pTag = document.createElement('p')
        //     pTag.innerHTML = `
        //         ${res.data[i]}: <input type="text">
        //     `
        //     mainSection.appendChild(pTag)
        // }
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}


chooseBtn.addEventListener('click', getAllActors)
randomBtn.addEventListener('click', getRandomActor)
addBtn.addEventListener('click', addActor)