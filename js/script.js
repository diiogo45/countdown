var check = false;
function explodir () {
if(check == false){

var timer1 = setInterval(function() {start()}, 1000);
var count = 10;



function start () {

BeepShort();

document.getElementById("time").innerHTML = count;

if(count == 0) {

clearInterval(timer1);

ThunderCrack();

document.getElementById("fire").src="explosao.gif";

document.getElementById("time").innerHTML = "tente outra vezR"



}


count--;
}

}

check = true;


}

function BeepShort () {

var beep = new Audio();

beep.src="sons/beepshort.mp3";

beep.play();



}


function ThunderCrack () {

var thunder = new Audio();

thunder.src="sons/ThunderCrack.mp3";

thunder.play();




}