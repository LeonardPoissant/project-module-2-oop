class Instructions{
    constructor(root, xPos, yPos){

    const div = document.createElement('div');
    div.style.position = "absolute";
    div.style.width = "280px";
    div.style.height = "180px"
    div.style.padding = "20px"
    div.style.left = xPos;
    div.style.top = yPos;
    div.style['background-color'] = "#28404f";
    div.style.color = "black";
    div.style['font-size'] = "19px";
    div.style.cursor = "pointer";
    div.style.fontfamily = "chalkduster, fantasy";
    div.innerText = "Welcome to Burgy's land! Burgy is a creature dedicated to avoid strudel cats! Test your skills by moving Burgy with the up, down, left and right arrows. Press Enter to start the game. How high can you get on Burgy's on the Hall of Fame ?"
    root.appendChild(div);
    this.domElement = div;
    }

    showInstructions = () =>{
        this.domElement.style.display = "block";
    }
    hideInstructions = () =>{
        this.domElement.style.display = "none";
    }
}