player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
player1score=0
player2score=0
document.getElementById("player1_name").innerHTML=player1name+" : "
document.getElementById("player2_name").innerHTML=player2name+" : "
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("questionturn").innerHTML="questionturn:"+player1name
document.getElementById("answerturn").innerHTML="answerturn:"+player2name
function send(){
    getword1= document.getElementById("number").value;
    getword2= document.getElementById("number1").value;
    question="question: "+getword1+"x"+getword2 
    input="<br>answer: <input id='input' type='text'>"
    button="<br><br><button class='btn btn-info' onclick='check()' >check</button>"
    row=question+input+button
    document.getElementById("output").innerHTML=row
    document.getElementById("number").value=""
    document.getElementById("number1").value=""
    actualanswer=getword1*getword2
}
questionturn="player1"
answerturn="player2"
function check(){
    getanswer=document.getElementById("input").value 

    if (getanswer==actualanswer) {
        if (answerturn=="player1") {
          player1score=player1score+1  
          document.getElementById("player1_score").innerHTML=player1score
     
        } else {
           player2score=player2score+1 
        document.getElementById("player2_score").innerHTML=player2score  
        }   
    }
    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("answerturn").innerHTML="answerturn- "+player2name  
      } else {
          answerturn="player1"
          document.getElementById("answerturn").innerHTML="answerturn- "+player1name    
      }
      if (questionturn=="player1") {
          questionturn="player2"
          document.getElementById("questionturn").innerHTML="questionturn- "+player2name 
      } else {
          questionturn="player1"
          document.getElementById("questionturn").innerHTML="questionturn- "+player1name  
      }
      document.getElementById("output").innerHTML=""
}
