//Övning 10
const suits = ['Spader', 'Hjärter', 'Ruter', 'Klöver'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Knekt', 'Dam', 'Kung', 'Ess'];

let deck = [];

for (let suit of suits) {
    for (let rank of ranks) {
        let card = suit + ' ' + rank;
        deck.push(card);
    }
}

console.log(deck)

//Övning 11
let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

for (let friend of friends) {
    let string = friend.name + ' likes '
    for (let i=0; i<friend.likes.length; i++) {
        string += friend.likes[i];
        if (i == 0) {
            string += ', '
        } else if (i == 1) {
            string += ' and '
        } else {
            string += '.'
        }
    }
    console.log(string)
}