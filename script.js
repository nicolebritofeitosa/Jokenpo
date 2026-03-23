
const result = document.querySelector(".round-result")
const yourScore = document.querySelector(".your-score-number")
const machineScore = document.querySelector(".machine-score-number")
const yourChoiceImage = document.querySelector("#your-choice-image")
const machineChoiceImage = document.querySelector("#machine-choice-image")

const resetClasses = () => {
    result.classList.remove("win", "lose", "draw")
    void result.offsetWidth
}

let yourScoreNumber = 0
let machineScoreNumber = 0

const humanMove = (humanChoice) => {
    const machineChoice = machineMove()

    roundStart(humanChoice, machineChoice)
    changeImage(humanChoice, machineChoice)
}

const machineMove = () => {
    const options = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return options[randomNumber]
}

const roundStart = (human, machine) => {
    resetClasses()
    console.log(human, machine)
    if (human === machine) {
        result.textContent = "Empate!"
        result.classList.add("draw")
    } else if (
        (human === 'paper' && machine === 'stone') || 
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        yourScoreNumber++
        result.textContent = "Você venceu!"
        yourScore.textContent = yourScoreNumber
        result.classList.add("win")
    } else {
        machineScoreNumber++
        result.textContent = "Você perdeu!"
        machineScore.textContent = machineScoreNumber
        result.classList.add("lose")
    }
}

const changeImage = (human, machine) => {
    if (human === 'stone') {
        yourChoiceImage.src = "./assets/pedra-img.webp"
    } else if (human === 'paper') {
        yourChoiceImage.src = "./assets/papel-image.png"
    } else if (human === 'scissors'){
        yourChoiceImage.src = "./assets/tesoura-image.png"
    } 

    if (machine === 'stone') {
        machineChoiceImage.src = "./assets/pedra-img.webp"
    } else if (machine === 'paper') {
        machineChoiceImage.src = "./assets/papel-image.png"
    } else {
        machineChoiceImage.src = "./assets/tesoura-image.png"
    }
}