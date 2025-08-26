const readline  = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let compNum = Math.floor(Math.random() * 100)+1;
let guessNum;
let attempts;

console.log("welcome to Guess Game");

const startGame  = ()=>{
console.log("1.Easy (10 chances)");
console.log("2.Medium (5 chances)");
console.log("3.Hard (3 chances)");
rl.question("Choose Game Level",(lev)=>{
switch (lev) {
    case "1":
        attempts=10;
        break;
    case "2":
        attempts=5;
        break;
    case "3":
       attempts=3;
        break;
    default:
        console.log("Invaild choice! Choose from 1 to 3");
}
console.log(`you have ${attempts} attempts to play this Guessing Game`);
playGame();
})
}

const playGame = ()=>{ 
rl.question("guess the number between 1 - 100",(ans)=>{
    guessNum=parseInt(ans);

    if(guessNum === compNum){
        console.log("Congratulation! You Guess it Right");
        rl.close();
    }else{
        attempts--;
        if(guessNum>compNum){
            console.log("The number is smaller than your guess");
        }else{
            console.log("The number is grater than your guess");
        }

        if(attempts>0){
            console.log(`you have left with this ${attempts} attempts`);
            playGame();
        }else{
            console.log("oops! your attempts are over");
            rl.question("do you want to play again? Type 1 otherwise Type 0",(again)=>{
              if(parseInt(again)===1){
              startGame();
              }else{
                console.log("You exited this Game");
               rl.close();
             }
            })
        }
    }
})
}

startGame();


