const hex = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9,0]
const container = document.querySelector('.container')
const button = document.querySelector('#color_button')
const color = document.querySelector("#color")


const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}

const generateBackground = () => {
    let hexRandom = '#'
    for (let i = 0; i < 6; i++) {
        hexRandom += hex[getRandomNumber()]
    }

    container.style.backgroundColor = hexRandom
    color.innerHTML = hexRandom
    
}

button.addEventListener('click',generateBackground)
