const SuperPlayer = require('./SuperPlayer');
const Player = require('./Player');




class HeroPlayer extends Player {
    constructor(nickName, score){
        super(nickName, score);
    }

    heal(){
        return this.score += 1;
    }

}


const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);

const superPlayer = new SuperPlayer('Super Player', 3);

const heroPlayer = new HeroPlayer('Hero Player', 10);

// Player 1 attacking player 2
console.log(player1.getInfo(), player2.getInfo());

console.log(player1.attack(player2))

console.log(player1.getInfo(), player2.getInfo());

// Player 1 attacks SuperPlayer
console.log(player1.attack(superPlayer));

console.log(player1.getInfo(), superPlayer.getInfo());