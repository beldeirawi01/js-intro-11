class Player {
    constructor(nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }

    getInfo(){
        return `${this.nickName}'s score is ${this.score}`
    }

    attack(player) {
        return this.score += 1, player.score -= 1;
    }

    damage(player) {
        return this.score -= 1;
    }
    
}


module.exports = Player;