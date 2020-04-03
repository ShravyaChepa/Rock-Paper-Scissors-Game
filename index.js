var selections=["Rock","Paper","Scissors"];
var mych;
var mypoints=0,yourpoints=0;

$(".mybutton").click(function(){
  mych=Math.floor(Math.random()*3);
  switch (mych) {
    case 0: $("#mychoiceimg").attr("src","https://cdn.clipart.email/eeeec721ecfbc8f1d53ea96b1345ca87_cartoon-emoji-paper-rock-scissors-icon_512-512.png");
      break;
    case 1: $("#mychoiceimg").attr("src","https://cdn.clipart.email/602d9cd302e7e91ac6cb67beed2a4ca5_face-icon-clipart-cartoon-scissors-drawing-transparent-clip-art_512-512.png");
      break;
    case 2: $("#mychoiceimg").attr("src","https://cdn.clipart.email/0ab2289f3e1ee720aaf00f4cf4ba2981_cartoon-emoji-paper-rock-scissors-icon_512-512.png");
      break;
    default: console.log("Sorry.Some error.");
      break;
  }

  if($(this).hasClass("rock")){
    $("#yourchoiceimg").attr("src","https://cdn.clipart.email/eeeec721ecfbc8f1d53ea96b1345ca87_cartoon-emoji-paper-rock-scissors-icon_512-512.png");
    if(mych==0){
      $("#whowon").text("Draw!");
    }
    else if(mych==1){
      $("#whowon").text("My point!");
      mypoints++;
    }
    else{
      $("h2").text("Your point!");
      yourpoints++;
    }
    $(".yourscore").text(yourpoints);
    $(".myscore").text(mypoints);
  }
  else if($(this).hasClass("paper")){
    $("#yourchoiceimg").attr("src","https://cdn.clipart.email/602d9cd302e7e91ac6cb67beed2a4ca5_face-icon-clipart-cartoon-scissors-drawing-transparent-clip-art_512-512.png");
    if(mych==0){
      $("#whowon").text("Your point!");
      yourpoints++;
    }
    else if(mych==1){
      $("#whowon").text("Draw!");
    }
    else{
      $("h2").text("My point!");
      mypoints++;
    }
    $(".yourscore").text(yourpoints);
    $(".myscore").text(mypoints);
  }
  else if($(this).hasClass("scissors")){
    $("#yourchoiceimg").attr("src","https://cdn.clipart.email/0ab2289f3e1ee720aaf00f4cf4ba2981_cartoon-emoji-paper-rock-scissors-icon_512-512.png");
    if(mych==0){
      $("#whowon").text("My point!");
      mypoints++;
    }
    else if(mych==1){
      $("#whowon").text("Your point!");
      yourpoints++;
    }
    else{
      $("h2").text("Draw!");
    }
    $(".yourscore").text(yourpoints);
    $(".myscore").text(mypoints);
  }
  else if($(this).hasClass("stop-button")){
    if(mypoints==yourpoints){
      $(".score").text("It was a draw match! Let's play again sometime!");
    }
    else if(mypoints>yourpoints){
      $(".score").text("I won! Good luck next time!");
    }
    else{
      $(".score").text("You won! You slayed it!");
    }
    yourpoints=0;
    mypoints=0;
  }
  else if($(this).hasClass("play-again-button")){
    yourpoints=0; mypoints=0;
    $(".yourscore").text("0");
    $(".myscore").text("0");
    $(".score").text("Score");
    $("#whowon").text("Make your choice!");
  }
});
