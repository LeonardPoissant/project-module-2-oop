class HallOfFame{

    constructor(root, xPos, yPos) {
        this.gamesPlayed = [];
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.display = 'flex';
        div.style.border = "thick solid 800000 ";
        div.style.left = xPos;
        div.style.top = yPos;
        div.style.color = 'red';
        div.style.width = "300px";
        div.style.height = GAME_HEIGHT;
        div.style.backgroundColor = "black";
        div.style.font = 'bold 30px Impact';
        div.innerText = "HALL OF FAME";
        div.style.zIndex = 100;
        root.appendChild(div);
        this.domElement = div;
    
    } 
    hideHoF = () =>{
        this.domElement.style.display = 'none';
    }
    showHoF() {
        this.domElement.style.display = 'block';
        this.domElement.innerText = "HALL OF FAME" ;
    }
    addGamePlayed(score)
    {
    let gp = new GamePlayed(score);
    this.domElement.innerHTML += '<br/>'+gp.getScore();
    this.gamesPlayed.push(gp);
    // update DOM with game played
    console.log('this.gamesPlayed ',this.gamesPlayed);
    }
}

