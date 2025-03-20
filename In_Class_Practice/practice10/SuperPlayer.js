const Player = require('./Player');

class SuperPlayer extends Player{
    constructor(nickName, score){
        super(nickName, score);
    }

    superAttack(superPlayer) {
        this.score += 2;
        superPlayer.score -= 2;
    }
}


module.exports = SuperPlayer;