
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let player = {
    name : "",
    chips : ""
}


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + " : $"+player.chips


function getrandumcard(){
    let randumnumber =  Math.floor(Math.random()*13)+1

    if (randumnumber>10){
        return 10
    }else if ( randumnumber === 1 ){
        return 11
    }else{
        return randumnumber
    }
}


function startGame(){

    isAlive = true
    let firstcard =  getrandumcard()
    let secondcard = getrandumcard()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
    renderGame()
}

function renderGame() {
    cardsEL.textContent = "cards: "
    for (let i = 0 ; i < cards.length ; i ++ ){
        cardsEL.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (hasBlackJack === false && isAlive === true){
        let card  = getrandumcard() 
        sum += card 
        cards.push(card)
        console.log(cards)
        renderGame()  
    }
    
}