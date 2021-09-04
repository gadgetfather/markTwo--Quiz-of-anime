var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score =0
var name= readlineSync.question(chalk.green("What is your name "))
console.log(chalk.magenta("Welcome "+ name+ " To ****ANIME QUIZ ***"))



// var scores= [{
//   name:"Akshay",
//   score:4
// },{
//   name:"Aditya",
//   score:3
// }]


function play(question,answer){
var userAnswer = readlineSync.question(chalk.yellow(question))
if (userAnswer.toUpperCase()===answer.toUpperCase()) {
  console.log(chalk.greenBright("right!"))
  score++
 
}
else {
  console.log(chalk.redBright("wrong!"))
}
 console.log(chalk.blueBright("Your score is ",score))
}

var questions = [{
  question:"Who is main character in Dragon Ball Z? ",
  answer:"Goku"
},{
  question:"In which anime note book is used to kill people? ",
  answer:"Death note" 
},{
  question:"what is the name of one punch man? ",
  answer:"Saitama"
}, {
  question:"Who was number one hero in my hero academia? ",
  answer:"All might"},{
  question:"What is the name of fox inside naruto? ",
  answer:"Kurama"}]

  for(i=0; i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }

  console.log(chalk.blueBright("WOW! You scored ",score," points"))

  // console.log(chalk.red("*** check out highScores ***"))
  
  // for(i=0;i<scores.length;i++)
  // {
  // console.log(scores[i].name,scores[i].score)
  // }