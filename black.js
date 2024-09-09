/*let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true


let sumEl = document.querySelector(".sum-el")

let cardsEl = document.querySelector(".cards-el")

let stmtEl = document.getElementById("stmt-el")

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum === 1){
        return 11
    }else if (randomNum >10){
        return 10
    }else{
        return randomNum
    }
    
}

function start(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent ="Cards: "
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: "+ sum
    if (sum <= 20){
        stmtEl.textContent = "Would you like to draw a new card?"
    }else if (sum === 21){
        stmtEl.textContent = "Whooah! You won the game!"
        hasBlackJack = true
    }else {
        stmtEl.textContent = "Man you are out of the game!"
        isAlive = false
    }
}

function newCard(){
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}*/