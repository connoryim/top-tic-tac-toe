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

const playerOne = newPlayer("Tyler");
console.log(playerOne);
playerOne.playerSymbol("a")

//Function for changing turns and assigning first player

//Function for placing symbols onto the board 

//Function for displaying symbols on a board

//Function to keep track of the board

//Function for checking if there is three in a row

//Function for reseting the board

//Function for new game 