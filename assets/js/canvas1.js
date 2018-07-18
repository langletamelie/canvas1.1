var cvs =  document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');
//carré de la maison//
ctx.beginPath();
ctx.moveTo(100,150);
ctx.lineTo(300,150);
ctx.lineTo(300,350);
ctx.lineTo(100,350);
ctx.fillStyle = '#A1D8E6';
ctx.fill();
//toit de la maison
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(100,150);
ctx.lineTo(300,150);
ctx.fillStyle = '#D7823E';
ctx.fill();
//porte de la maison
ctx.beginPath();
ctx.moveTo(180,275);
ctx.lineTo(225,275);
ctx.lineTo(225,350);
ctx.lineTo(180,350);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
//fenetre gauche
ctx.beginPath();
ctx.moveTo(130,180);
ctx.lineTo(180,180);
ctx.lineTo(180,230);
ctx.lineTo(130,230);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
//fenetre droite
ctx.beginPath();
ctx.moveTo(230,180);
ctx.lineTo(280,180);
ctx.lineTo(280,230);
ctx.lineTo(230,230);
ctx.fillStyle = '#C9C9C9';
ctx.fill();
