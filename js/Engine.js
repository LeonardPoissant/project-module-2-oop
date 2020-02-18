class Engine {
    constructor(theRoot) {
        this.root = theRoot;
        this.player = new Player(this.root);
        this.score = new Score(this.root, 7, 3);
        this.health = new Health(this.root, 538, 3);
        this.instructions = new Instructions(this.root, 174, 152);
        this.HallOfFame = new HallOfFame(this.root, 680, 0);
        this.enemies = [];
        this.bonuses = [];
        addBackground(this.root);
        this.instructions.showInstructions();
        this.HallOfFame.hideHoF();
    }

    gameLoop = () => {

        this.instructions.hideInstructions();

        this.score.update();

        if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime();
        let timeDiff = (new Date).getTime() - this.lastFrame;
        this.lastFrame = (new Date).getTime();

        this.enemies.forEach(enemy => {
            enemy.update(timeDiff);
        });

        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed;
        });

        while (this.enemies.length < MAX_ENEMIES) {
            const spot = nextEnemySpot(this.enemies);
            this.enemies.push(new Enemy(this.root, spot));
        }

        this.bonuses.forEach(bonus => {
            bonus.update(timeDiff);
        });

        this.bonuses = this.bonuses.filter(bonus => {
            return !bonus.destroyed;
        });
        while (this.bonuses.length < MAX_BONUS) {
            const spot = nextBonusSpot(this.bonuses);
            this.bonuses.push(new Bonus(this.root, spot));
        }

        if(this.isPlayerBonus()){
            this.health.healthier();
            this.player.smallerBurger()
        }

        if(this.isPlayerHit()){
        this.health.lessHealthy();
        this.player.biggerBurger()
        }

        if (this.isPlayerDead()) {
            this.HallOfFame.showHoF()
            this.HallOfFame.addGamePlayed(this.score)
            window.alert("Game over");
            clearTimeout();
            return;
        }

        setTimeout(this.gameLoop, 20);
    };
    isPlayerBonus = () =>{
        let isBonus = false;
        this.bonuses.forEach(bonus=> {
            if (bonus.x + BONUS_WIDTH >= this.player.x &&
                bonus.x <= this.player.x + PLAYER_WIDTH &&
                bonus.y + BONUS_HEIGHT >= this.player.y &&
                bonus.y >= this.player.y + PLAYER_HEIGHT)
                {
                    isBonus = true;
            }
        });
        return isBonus;
    };

    isPlayerHit = () =>{
        let isHit = false;
        this.enemies.forEach(enemy=>{
            if (enemy.x + ENEMY_WIDTH >= this.player.x &&
                enemy.x <= this.player.x + PLAYER_WIDTH &&
                enemy.y + ENEMY_HEIGHT >= this.player.y &&
                enemy.y >= this.player.y + PLAYER_HEIGHT)
                {
                    isHit = true
            }
        });
        return isHit;
    };
    isPlayerDead = () => {
        let isDead= false;
            if (this.health.getHealth() <= 0)
                {
                    isDead = true;
            }
        return isDead;
    };

};
