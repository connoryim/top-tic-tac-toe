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
    symbolButtonOne.classList.add("x");
    symbolButtonOne.textContent = "X";

    const symbolButtonTwo = document.createElement("button");
    symbolButtonTwo.classList.add("o")
    symbolButtonTwo.textContent = "0";

    const newGameButton = document.createElement("button");
    newGameButton.setAttribute("id","newGameButton")
    newGameButton.textContent = "New Game";

    
    buttonsBlock.appendChild(symbolButtonOne);
    buttonsBlock.appendChild(symbolButtonTwo);
    

    divPlayer.setAttribute("id","getPlayers");
    divPlayer.appendChild(blockPlayerOne);
    divPlayer.appendChild(buttonsBlock);
    divPlayer.appendChild(blockPlayerTwo);
    divPlayer.appendChild(newGameButton);
    container.appendChild(divPlayer);

};

getPlayers();

//Function for assigning symbol to player

//Function for changing turns and assigning first player

//Function for placing symbols onto the board 

//Function for displaying symbols on a board

//Function to keep track of the board

//Function for checking if there is three in a row

//Function for reseting the board

//Function for new game 