var score, roundScore, activePlayer,dice, gamePlay=1;

init();

var lastDice;

document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click', function()
                                                   {
    if(gamePlay){
       var dice1=Math.floor(Math.random()*6)+1;
          var dice2=Math.floor(Math.random()*6)+1;
        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';
        document.getElementById('dice-1').src='dice-'+dice1+'.png';
        document.getElementById('dice-2').src='dice-'+dice2+'.png';
        
    if(dice1!==1 && dice2!==1)
        {   
          roundScore+=dice1+ dice2;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;}
    else
        {changePlayer();
        }  
        
//        if(lastDice===dice && dice===6)
//        {
//         document.querySelector('#score-'+activePlayer).textContent='0';
//            changePlayer();}
//        
//    if(dice!==1)
//        {   
//          roundScore+=dice;
//            document.querySelector('#current-'+activePlayer).textContent=roundScore;}
//    else
//        {changePlayer();
//        }  
//    lastDice=dice;
//    }
   
    }});

document.querySelector('.btn-hold').addEventListener('click', function()
                                                     {
    if(gamePlay){
    score[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent= score[activePlayer];
        var set=document.querySelector('.set-Score').value;
        console.log(set);
    if(score[activePlayer]>=set)
    {document.querySelector('#name-'+activePlayer).textContent='Winner!!!';
      document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
       document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
       document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     gamePlay=0;
     }
    else
    changePlayer();}
});

function changePlayer()
{
    activePlayer===0?activePlayer=1:activePlayer=0;
            roundScore=0;
            document.querySelector('#current-0').textContent='0';
            document.querySelector('#current-1').textContent='0';
            //document.querySelector('#score-0').textContent='0';
           // document.querySelector('#score-1').textContent='0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
 
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';}

document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
    score = [0,0];
roundScore=0;
activePlayer=0;
document.querySelector('#score-0').textContent='0';
document.querySelector('#score-1').textContent='0';
document.querySelector('#current-0').textContent='0';
document.querySelector('#current-1').textContent='0';
    document.getElementById('name-0').textContent='player 1';
     document.getElementById('name-1').textContent='player 2';
     document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner'); 
    document.querySelector('.player-0-panel').classList.remove('active');   
    document.querySelector('.player-1-panel').classList.remove('active'); 
     document.querySelector('.player-0-panel').classList.add('active'); 
}