var readlineSync=require("readline-sync");
var score=0;

var userName=readlineSync.question("What is your name?");
console.log("welcome "+userName+"  do u know dristy?");
var highestScore=[
  {name:"steward",
  score:3},
  {name:"robert",score:2},
  {name:"rehan",score:2}
]

//play function
function play(question,answer){
    var userAnswer=readlineSync.question(question);
    if(userAnswer.toUpperCase()===answer.toUpperCase()){
      
        console.log("right!")
        score=score+1;
    }
    else{
        console.log("wrong!");
      
    }
    console.log("current score:",score);
    console.log("-------");
}

var questions=[
    {
             question:"Where does she live?",answer:"Delhi"
        },
        {
            question:"Her fav superhero would be?",answer:"superman"
        },
        {
            question:"what does she like the most?",answer:"dancing and baking"
        }
];
//loop
for(var i=0;i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}
if(score>=highestScore[0].score){
  console.log("nailed it! you are leading with a score",score);
}else{
  console.log("oops! The highest score is",highestScore[0].score);
}
