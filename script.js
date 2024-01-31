//Factory function for creating players and assigning symbols

function newPlayer (name){
    return{
        name : name,
        playerSymbol(symbol){
            this.symbol = symbol;
            console.log(this);
        },
    };
};

function getPlayers (){
    const divPlayer = document.createElement("div");
    const container = document.getElementById("container");
    
    const inputPlayer = document.createElement("input");
    inputPlayer.setAttribute("type","text")
    
    //Info input for first player
    const blockPlayerOne = document.createElement("div");
    blockPlayerOne.setAttribute("id","blockPlayerOne");
    
    const firstInputPlayer = inputPlayer.cloneNode(true);
    firstInputPlayer.setAttribute("id","firstInputPlayer");
    
    const textPlayerOne = document.createElement("span");
    textPlayerOne.textContent = "Player 1:";

    blockPlayerOne.appendChild(textPlayerOne);
    blockPlayerOne.appendChild(firstInputPlayer);

    //Info input for second player
    const blockPlayerTwo = document.createElement("div");
    blockPlayerTwo.setAttribute("id","blockPlayerTwo");
    
    const secondInputPlayer = inputPlayer.cloneNode(true);
    secondInputPlayer.setAttribute("id","secondInputPlayer");

    const textPlayerTwo = document.createElement("span");
    textPlayerTwo.textContent = "Player 2:";

    blockPlayerTwo.appendChild(textPlayerTwo);
    blockPlayerTwo.appendChild(secondInputPlayer);


    //Block for buttons
    const buttonsBlock = document.createElement("div");
    buttonsBlock.setAttribute("id","buttonsBlock");
    
    const symbolButtonOne = document.createElement("button");
    symbolButtonOne.setAttribute("id","symbolButtonOne");
    symbolButtonOne.classList.add("x");
    symbolButtonOne.textContent = "X";
    symbolButtonOne.addEventListener("click",switchSymbols);

    const symbolButtonTwo = document.createElement("button");
    symbolButtonTwo.setAttribute("id","symbolButtonTwo");
    symbolButtonTwo.classList.add("o");
    symbolButtonTwo.textContent = "O";
    symbolButtonTwo.addEventListener("click",switchSymbols);

    const newGameButton = document.createElement("button");
    newGameButton.setAttribute("id","newGameButton")
    newGameButton.textContent = "New Game";
    newGameButton.addEventListener("click", setupGame);

    
    buttonsBlock.appendChild(symbolButtonOne);
    buttonsBlock.appendChild(symbolButtonTwo);
    

    divPlayer.setAttribute("id","getPlayers");
    divPlayer.appendChild(blockPlayerOne);
    divPlayer.appendChild(buttonsBlock);
    divPlayer.appendChild(blockPlayerTwo);
    divPlayer.appendChild(newGameButton);
    container.appendChild(divPlayer);

};



function switchSymbols(){
    console.log(this);
    let otherButton = ""
    if(this.matches("#symbolButtonOne")){
        otherButton = document.getElementById("symbolButtonTwo")    
        if(this.classList.contains("x")){
            this.classList.add("o");
            this.classList.remove("x");
            this.textContent = "O"
            otherButton.classList.remove("o")
            otherButton.classList.add("x")
            otherButton.textContent = "X"
        }else if(this.classList.contains("o")){
            this.classList.add("x");
            this.classList.remove("o");
            this.textContent = "X"
            otherButton.classList.remove("x")
            otherButton.classList.add("o")
            otherButton.textContent = "O"
        }
    }else if(this.matches("#symbolButtonTwo")){
        otherButton = document.getElementById("symbolButtonOne")
        if(this.classList.contains("x")){
            this.classList.add("o");
            this.classList.remove("x");
            this.textContent = "O"
            otherButton.classList.remove("o")
            otherButton.classList.add("x")
            otherButton.textContent = "X"
        }else if(this.classList.contains("o")){
            this.classList.add("x");
            this.classList.remove("o");
            this.textContent = "X"
            otherButton.classList.remove("x")
            otherButton.classList.add("o")
            otherButton.textContent = "O"
        }
    }
};

function setupGame(){
    this.parentNode.remove()

    const boardSymbols = [
        {
            a1:"",
            a2:"",
            a3:""
        },
        {
            b1:"",
            b2:"",
            b3:""
        },
        {
            c1:"",
            c2:"",
            c3:"",
        }
    ]


    const gameContainer = document.createElement("div");
    gameContainer.setAttribute("id","gameContainer");

    const newPlayers = document.createElement("button");
    newPlayers.textContent = "New Players";
    newPlayers.addEventListener("click", ()=>{       
        getPlayers();
        gameContainer.remove();
    });
    newPlayers.setAttribute("id","newPlayers")

    const scoreBoard = document.createElement("div");
    scoreBoard.setAttribute("id","scoreBoard");


    //Score display for player one
    const scorePlayerOne = document.createElement("div");
    scorePlayerOne.setAttribute("id","scorePlayerOne");
    
    const namePlayerOne = document.createElement("span");
    namePlayerOne.setAttribute("id","namePlayerOne");
    namePlayerOne.textContent = "player 1: "
    
    const pointsPlayerOne = document.createElement("span");
    pointsPlayerOne.setAttribute("id","pointsPlayerOne");
    pointsPlayerOne.textContent = 0;

    scorePlayerOne.appendChild(namePlayerOne);
    scorePlayerOne.appendChild(pointsPlayerOne);

    scoreBoard.appendChild(scorePlayerOne);
    
    //Score display for player two
    const scorePlayerTwo = document.createElement("div");
    scorePlayerTwo.setAttribute("id","scorePlayerTwo");
    
    const namePlayerTwo = document.createElement("span");
    namePlayerTwo.setAttribute("id","namePlayerTwo");
    namePlayerTwo.textContent = "player 2: "
    
    const pointsPlayerTwo = document.createElement("span");
    pointsPlayerTwo.setAttribute("id","pointsPlayerTwo");
    pointsPlayerTwo.textContent = 0;

    scorePlayerTwo.appendChild(namePlayerTwo);
    scorePlayerTwo.appendChild(pointsPlayerTwo);

    scoreBoard.appendChild(scorePlayerTwo);


    const gameBoard = document.createElement("div");
    gameBoard.setAttribute("id","gameBoard")

    
    for(i=0; i<boardSymbols.length; i++){
        for(var nameSpace in boardSymbols[i]){
            const gameSpace = document.createElement("button");
            gameSpace.setAttribute("id",nameSpace);
            gameSpace.classList.add("space");
            gameSpace.textContent =""
            gameBoard.appendChild(gameSpace);
        }
    };


    
    gameContainer.appendChild(newPlayers);
    gameContainer.appendChild(scoreBoard);
    gameContainer.appendChild(gameBoard);
    document.body.appendChild(gameContainer);
    
}


getPlayers();

//Function for assigning symbol to player

//Function for changing turns and assigning first player

//Function for placing symbols onto the board 

//Function for displaying symbols on a board

//Function to keep track of the board

//Function for checking if there is three in a row

//Function for reseting the board

//Function for new game 