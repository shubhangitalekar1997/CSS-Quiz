var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

//chalk themes
var headBg = chalk.green.bold;
var titleBg = chalk.cyan;
var questionTheme = chalk.bold.magenta.italic;
var questionNoTheme = chalk.bold.bgMagenta.white;
var newLineTheme = chalk.cyan;
var warning = chalk.red;
var success = chalk.green;
var scoreTheme = chalk.keyword('orange');

//for ease of use
function print(data){
  console.log(data);
}
function newLine(){
  print(newLineTheme("-------------------------------------"));
}
function printScore(score){
  print(scoreTheme("Score: "+ score));
  newLine();
}

//array of questions object
var questionArray = [
  {
    question: "What does CSS stand for?\n \tA. Cascading Style Sheets\n \t B. Computer Style Sheets\n \t C. Creative Style Sheets\n \t D. Colorful Style Sheets",
    answer: "A",
  },
  {
    question: "Which is the correct CSS syntax?\n \t A. body{color:black;}\n \t B. {body;color:black;}\n \t C. {body:color=black;}\n \t D. body:color=black;",
    answer: "A",
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?\n \t A. In the <body> section\n \t B. In the <head> section\n \t C. At the end of the document",
    answer: "B",
  },
  {
    question: "which HTML tag is used to define an internal style sheet?\n \t A. <css>\n \t B. <script>\n \t C. <style>",
    answer: "C",
  },
  {
    question: "Which HTML attribute is used to define inline styles?\n \t A. style\n \t B. font\n \t C. class\n \t D. styles",
    answer: "A",
  },
  {
    question: "What is the default value of the position property?\n \t A. relative\n \t B. absolute\n \t C. fixed\n \t D. static",
    answer: "D",
  },
  {
    question: "How do you select all p elements inside a div element?\n \t A. div.p\n \t B. div p\n \t C. div + p",
    answer: "B",
  },
  {
    question: " How do you select elements with class name 'test'?\n \t A. #test\n \t B. *test\n \t C. .test\n \t D. test",
    answer: "C",
  },
  {
    question: "How do you select elements with id 'demo'?\n \t A. #demo\n \t B. demo\n \t C. .demo\n \t D. *demo",
    answer: "A",
  },
  {
    question: "When using the padding property; are you allowed to use negative values?\n \t A. Yes\n \t B. No",
    answer: "B",
  },
  {
    question: "Which property is used to change the left margin of an element?\n \t A. margin-left\n \t B. indent\n \t D. padding-left",
    answer: "A",
  },
  {
    question: " How to you make the text bold?\n \t A.  style:bold;\n \t B. font:bold;\n \t C. font-weight:bold",
    answer: "C",
  },
  {
    question: " Which property is used to change the font of an element?\n \t A. font-weight\n \t B. font-family\n \t C. font-style",
    answer: "B",
  },
  {
    question: "Which CSS property controls the text size?\n \t A. font-size\n \t B. text-size\n \t C. text-style\n \t D. font-style",
    answer: "A",
  },
  {
    question: "Which CSS property is used to change the text color of an element?\n \t A. text-color\n \t B. color\n \t C. fgcolor",
    answer: "B",
  },
];


 
//process quesitons according to user answer
function processQuestion(qNumber,question, answer){
  var userAnswer = readLineSync.question(questionNoTheme("QUESTION-"+qNumber+":")+"\n"+questionTheme(question+"\n---> "));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    print(success("yess...! That was true answer"));
    score = score + 2;
    printScore(score);
  }else{
    print(warning("Sorry...! Wrong answer"));
    score = score - 1;
    printScore(score);
  }
}

//start point
print(headBg('                 CSS QUIZ               \n'));
print(titleBg.inverse.bold("   ***** RULES *****   "));
print(titleBg.italic("1. There are total 15 questions \n"+
                      "2. All questions are compulsory\n"+
                      "3. Right answer will be awarded with 2 points\n"+
                      "4. And each wrong answer will reduce 1 from whole score\n"));

newLine();

//ask username(Input)
var userName= readLineSync.question(questionTheme("Let's start....! What's your name ?\n "));
print(chalk.green(" Welcome..."+ userName)+"\n Lets's check how much you know about CSS"+chalk.green.italic("\n BEST OF LUCK ! "))

//processing
for(var i=0;i< questionArray.length; i++){
  let qNumber = i+1;
  currentObject = questionArray[i];
  processQuestion(qNumber,currentObject.question, currentObject.answer);
}

//output
print(titleBg.inverse.bold("        ***** RESULTS *****        \n\t")+titleBg.italic("You Got: ")+score+"\n");