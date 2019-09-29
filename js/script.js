 let player1 = document.querySelector("#player1");
 let player2 = document.querySelector("#player2");
 let clear = document.querySelector('#clear');
 let score1 = document.querySelector('#score1');
 let score2 = document.querySelector('#score2');
 let cpt1=0;
 let cpt2=0;
 let defaultScore =5;


function scorePlayer1(){
            if(cpt1 < defaultScore && cpt2 < defaultScore){
            cpt1++;
            score1.innerText = cpt1;}
    if(cpt1 === defaultScore){
        score1.classList.add('winner')
    }
        }


function scorePlayer2(){
            if(cpt2 < defaultScore && cpt1 < defaultScore){
            cpt2++;
            score2.innerText = cpt2;}

        if(cpt2 === defaultScore){
            score2.classList.add('winner')
        }
            }

function clearScore(){

            cpt1=0;
            cpt2=0;
            score1.innerText = "0";
            score2.innerText = "0";
                }

clear.addEventListener('click', clearScore)
player1.addEventListener('click', scorePlayer1)
player2.addEventListener('click', scorePlayer2)