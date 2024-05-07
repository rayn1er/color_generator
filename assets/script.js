const colors = ['red','blue','orange','yellow','pink','lightblue']
const button = document.getElementById('color_button')
const container = document.querySelector(".container")
const color = document.querySelector("#color")


const changeColor = () => {
    let randomNumber = getRandomNumber()
    const print_color = colors[randomNumber]
    

    container.style.backgroundColor = print_color
    color.innerHTML = print_color

}

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

button.addEventListener('click',changeColor)