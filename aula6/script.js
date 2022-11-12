function shuffle(card){
    var jk = document.getElementById("colss");
    var x = Math.random()*jk.offsetWidth, y =Math.random()*jk.offsetHeight;
    var card1 = document.getElementById(card);
    card1.style.boxShadow="5px 5px 0.5rem "+ card1.style.color;
    card1.style.left= x-x/8+"px";
    card1.style.top= y-y/6+"px";
    card1.style.transition="all 1s";
   
}
function position(card){
    var card1 = document.getElementById(card);
    document.getElementById("color").innerText="My color is "+card1.style.color;
    document.getElementById("color").style.color=card1.style.color;
    document.getElementById('top').innerText="top: "+parseInt(card1.style.top);
    document.getElementById('left').innerText="lef: "+parseInt(card1.style.left);
}
function limpa(){
   
    document.getElementById("color").innerText="My color is";
    document.getElementById("top").innerText="top:";
    document.getElementById("left").innerText="left:";
    document.getElementById("color").style.color="white";
}
function shuffles(){
    shuffle("redCard");
    shuffle("blueCard");
    shuffle("greenCard");
    shuffle("violetCard");
    shuffle("yellowCard");
    shuffle("brownCard");
    shuffle("grayCard");
    shuffle("turquoiseCard");
}
function indexRand(card){
    var r = Math.round(Math.random()*8);
    document.getElementById(card).style.zIndex=r;
}
window.onload=shuffles();
window.onload=indexRand("redCard");
window.onload=indexRand("blueCard");
window.onload=indexRand("greenCard");
window.onload=indexRand("violetCard");
window.onload=indexRand("yellowCard");
window.onload=indexRand("browmCard");
window.onload=indexRand("grayCard");
window.onload=indexRand("turquoiseCard");

