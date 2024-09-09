let firstCard = getRandom()
let secondCard = getRandom()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let isAlive = true
let hasBlackjack = false


let cardsEl = document.querySelector(".cards-el")
let sumEl = document.querySelector(".sum-el")
let stmtEl = document.getElementById("stmt-el")

let attEl = document.querySelector(".att-el")

function getRandom(){
    rand = Math.floor(Math.random()* 13) + 1
    if (rand === 1 ){
        return 11
    }else if (rand > 10){
        return 10
    }else{
        return rand
    }
}

let count = 0

function start(){
    renderGame() 
}

function renderGame(){
    count += 1
    attEl.textContent = count

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i+=1){
        cardsEl.textContent += cards[i] + ", "
    }
    sumEl.textContent = "Sum " + sum  

    if (sum <= 20){
        stmtEl.textContent = "Would you like to draw a new card?"
    }else if (sum === 21){
        stmtEl.textContent = "Whoohoo! You've got blackjack!"
        hasBlackjack = true
    }else{
        stmtEl.textContent = "You are out of the game!"
    }
}

function newCard(){
    let newCard = getRandom()
    sum += newCard
    cards.push(newCard)
    renderGame()
}

