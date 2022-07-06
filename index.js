function writeCards(names, event) {
    var cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return cards
}

function countDown(numbers) {
while (numbers >= 0){
    console.log(numbers--);
    }
}

