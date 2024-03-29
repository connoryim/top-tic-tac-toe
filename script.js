//Function for creating players and assigning symbols
function newPlayer (){
    return{
        name: "",
        symbol: "",
        score: 0,
        scoreUp: function(){
            this.score +=1; 
        }
    };
};

//Function for reseting the board
function clearBoard(){
    return {
        a1:"",
        a2:"",
        a3:"",
        b1:"",
        b2:"",
        b3:"",
        c1:"",
        c2:"",
        c3:""
    }
};


//Function for getting new players
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
    firstInputPlayer.setAttribute("value","Player 1")
    
    const textPlayerOne = document.createElement("span");
    textPlayerOne.textContent = "Player 1:";

    blockPlayerOne.appendChild(textPlayerOne);
    blockPlayerOne.appendChild(firstInputPlayer);

    //Info input for second player
    const blockPlayerTwo = document.createElement("div");
    blockPlayerTwo.setAttribute("id","blockPlayerTwo");
    
    const secInputPlayer = inputPlayer.cloneNode(true);
    secInputPlayer.setAttribute("id","secInputPlayer");
    secInputPlayer.setAttribute("value","Player 2");

    const textPlayerTwo = document.createElement("span");
    textPlayerTwo.textContent = "Player 2:";

    blockPlayerTwo.appendChild(textPlayerTwo);
    blockPlayerTwo.appendChild(secInputPlayer);


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


//ALlows the user to choose which symbol they want
function switchSymbols(){
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

    const playerOne = newPlayer()
    playerOne.name = document.getElementById("firstInputPlayer").value
    playerOne.symbol = document.getElementById("symbolButtonOne").textContent

    const playerTwo = newPlayer()
    playerTwo.name = document.getElementById("secInputPlayer").value
    playerTwo.symbol = document.getElementById("symbolButtonTwo").textContent


    this.parentNode.remove()

    newRound(playerOne,playerTwo)
};

function newRound(playerOne,playerTwo){
    const gameBoard = clearBoard();

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
    namePlayerOne.textContent = playerOne.name + ": "
    
    const pointsPlayerOne = document.createElement("span");
    pointsPlayerOne.setAttribute("id","pointsPlayerOne");
    pointsPlayerOne.textContent = playerOne.score;

    scorePlayerOne.appendChild(namePlayerOne);
    scorePlayerOne.appendChild(pointsPlayerOne);

    scoreBoard.appendChild(scorePlayerOne);
    
    //Score display for player two
    const scorePlayerTwo = document.createElement("div");
    scorePlayerTwo.setAttribute("id","scorePlayerTwo");
    
    const namePlayerTwo = document.createElement("span");
    namePlayerTwo.setAttribute("id","namePlayerTwo");
    namePlayerTwo.textContent = playerTwo.name + ": "
    
    const pointsPlayerTwo = document.createElement("span");
    pointsPlayerTwo.setAttribute("id","pointsPlayerTwo");
    pointsPlayerTwo.textContent = playerTwo.score;

    scorePlayerTwo.appendChild(namePlayerTwo);
    scorePlayerTwo.appendChild(pointsPlayerTwo);

    scoreBoard.appendChild(scorePlayerTwo);


    const displayBoard = document.createElement("div");
    displayBoard.setAttribute("id","displayBoard")


    for(var i in gameBoard){
        const gameSpace = document.createElement("button");
        gameSpace.setAttribute("id",i);
        gameSpace.classList.add("space");
        gameSpace.textContent =gameBoard[i];
        gameSpace.addEventListener("click",claimSpace);
        displayBoard.appendChild(gameSpace);
    
    };
    let currentTurn = playerTurns(2);
    //Function for placing symbols onto the board 
    function claimSpace(){
        if(this.textContent==""){
            if(currentTurn){
                this.classList.add(playerOne.symbol);
                this.textContent = playerOne.symbol;
                gameBoard[this.id] = this.textContent;
                if (winCheck(gameBoard) || tieCheck(gameBoard)){
                    this.parentNode.parentNode.remove();
                    roundOver(gameBoard,playerOne.symbol,playerOne,playerTwo);
                };
                return currentTurn = 0;
            }else{
                this.classList.add(playerTwo.symbol);
                this.textContent = playerTwo.symbol;
                gameBoard[this.id] = this.textContent;
                if (winCheck(gameBoard) || tieCheck(gameBoard)){
                    console.log("horse");
                    this.parentNode.parentNode.remove();
                    roundOver(gameBoard,playerTwo.symbol,playerOne,playerTwo);
                };
                return currentTurn = 1;
                
            };
        };
    }
    //Function for changing turns and assigning first player
    function playerTurns(num){
        //Sets first players turn
        let firstTurn = Math.floor(Math.random()*num);
        function nextTurn() {
            if (currentTurn || firstTurn){
                currentTurn = 0;
                return currentTurn;
            } else{
                currentTurn = 1;
                return currentTurn;
            }
        };
        return {
            nextTurn: nextTurn
        };  
    };
    gameContainer.appendChild(newPlayers);
    gameContainer.appendChild(scoreBoard);
    gameContainer.appendChild(displayBoard);
    document.body.appendChild(gameContainer);
}


function winCheck (gameBoard){
    const columns = {
        a:"a",
        b:"b",
        c:"c"}
    for(var k in columns){
        if(gameBoard[k+1] == gameBoard[k+2] && gameBoard[k+2] == gameBoard[k+3] && gameBoard[k+1]!= ""){
            return true;
        }
    }
    for(var i = 1; i < 4; i++){
        if(gameBoard["a"+i] == gameBoard["b"+i] && gameBoard["b"+i] == gameBoard["c"+i] && gameBoard["a"+ i] !=""){
            return true;
        }
    }
    if(gameBoard["a1"] == gameBoard["b2"] && gameBoard["b2"] == gameBoard["c3"] && gameBoard["b2"]!==""){
        return true;
    } else if(gameBoard["a3"] == gameBoard["b2"] && gameBoard["b2"] == gameBoard["c1"] && gameBoard["b2"] !==""){
        return true;
    } 
}

function tieCheck(gameBoard){
    for(var i in gameBoard){
        if(gameBoard[i]== false){
            return false;
        }
    }
    return true;
}


function roundOver(gameBoard,winningSymbol,playerOne,playerTwo){
    var winnerText =""

    if(playerOne.symbol == winningSymbol){
        playerOne.scoreUp()
        winnerText = playerOne.name + " wins the round!";
    }else if(playerTwo.symbol == winningSymbol){
        playerTwo.scoreUp()
        winnerText = playerTwo.name + " wins the round!";
    }else{
        winnerText = "It's a tie";
    }
    
    if(playerOne.score == 2){
        event.stopPropagation();
        gameOver(playerOne,playerOne,playerTwo)
    } else if(playerTwo.score == 2){
        gameOver(playerTwo,playerOne,playerTwo)
    } else{
        const roundOverScreen = document.createElement("div");
        roundOverScreen.setAttribute("id","roundOverScreen");

        const roundOverText = document.createElement("span");
        roundOverText.textContent = winnerText;
        roundOverScreen.addEventListener("mousedown",function(){
            this.remove();
            newRound(playerOne,playerTwo)
        });
        roundOverScreen.appendChild(roundOverText);
        document.body.appendChild(roundOverScreen);
    }
    
    
}

function gameOver(winningPlayer,playerOne,playerTwo){
    console.log("horse");
    const gameOverScreen = document.createElement("div");
    gameOverScreen.setAttribute("id","gameOverScreen");
    const congrats = document.createElement("span");

    congrats.textContent = winningPlayer.name + " wins the game, congratulations!"

    const rematch = document.createElement("button");
    rematch.textContent = "Rematch";
    rematch.setAttribute("id","rematch");
    rematch.addEventListener("mousedown",function(){
        gameOverScreen.remove();
        playerOne.score = 0;
        playerTwo.score = 0;
        newRound(playerOne,playerTwo);
    });

    const gameOverNP = document.createElement("button");
    gameOverNP.textContent = "New Players";
    gameOverNP.setAttribute("id","gameOverNP");
    gameOverNP.addEventListener("click", ()=>{       
        gameOverScreen.remove();
        getPlayers();
        
    });

    gameOverScreen.appendChild(congrats);
    gameOverScreen.appendChild(rematch);
    gameOverScreen.appendChild(gameOverNP);
    document.body.appendChild(gameOverScreen);
};

getPlayers(); 