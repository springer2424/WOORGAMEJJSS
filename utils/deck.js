



function createCard(rank, suite) {
  const SPECIAL_RANK = { J: 11, Q: 12, K: 13, A: 14 };
  if (rank in SPECIAL_RANK) {
    value = SPECIAL_RANK[rank];
  } else {
    value = Number(rank);
  }
  const card = {
    rank,
    suite,
    value,
  };
  return card;
}
// console.log(createCard("4","h"))
function createDeck() {
  const deckOfCards = [];
  LIST_SUITE = ["H", "C", "D", "S"];
  LIST_RANK = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A",
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      let cardd = createCard(LIST_RANK[j],LIST_SUITE[i])
      deckOfCards.push(cardd)
    }
  }
  return deckOfCards
}
// console.log(createDeck())


function shuffle(deck){
    for(let i = 0;i<1000;i++){
        let index1 = Math.floor(Math.random() * deck.length)
        let index2 = Math.floor(Math.random() * deck.length)
        if(index1 == index2){
            continue
        }else{
            [deck[index2],deck[index1]] = [deck[index1],deck[index2]]
        }
    }
    return deck
}

// console.log(shuffle(createDeck()))

function compareCards(p1Card, p2Card){
    if(p1Card.value > p2Card.value){
        return "p1"
    }
    if(p1Card.value < p2Card.value){
        return "p2"
    }
    if(p1Card.value == p2Card.value){
        return "WOR"
    }
}
// console.log(compareCards({ rank: 'A', suite: 'C', value: 9 }, { rank: '10', suite: 'S', value: 9 }))