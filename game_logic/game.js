import {compareCards,createDeck,shuffle,createCard} from '../utils/deck.js'  
 
 

function createPlayer(name){
    const player1 = {
        name,
        hand : [],
        wonPile : [],
    }
    return player1
}
function createPlayerai(){
    const player2 = {
        name:"AI",
        hand:[],
        wonPile:[]
    }
    return player2
} 


function initGame(){
    const player1 = createPlayer("yechiel")
    const player2 = createPlayerai()
    const decknotshaf = createDeck()
    const deckshaf = shuffle(decknotshaf)
    for(let i = 0;i<52;i++){
        if(i < 26){
            player1.hand.push(deckshaf[i])
        }else{
            player2.hand.push(deckshaf[i])
        }

    }
    const game = {
        player1,
        player2

    }
    return game
}


// console.log(initGame())

function playRound(player_1, player_2){
    while(player_1.hand.length >0){

        let p1car = player_1.hand.shift()
        let p2car = player_2.hand.shift()
        let rezolt = compareCards(p1car,p2car)
        if(rezolt == "p1"){
            player_1.wonPile.push(p1car,p2car)
        }
        if(rezolt == "p2"){
            player_2.wonPile.push(p1car,p2car)
        }

}
if(player_1.wonPile.length>player_2.wonPile.length){
    return "p1 wwwoooonnn"
}
if(player_1.wonPile.length<player_2.wonPile.length){
    return "p2 wwwoooonnn"
}

}
let obje = initGame()
console.log(playRound(obje.player1,obje.player2))
console.log(obje.player1.wonPile.length,obje.player2.wonPile.length)





