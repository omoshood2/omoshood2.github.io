var x=random(10,370);

var y=random(30,370);

noStroke();

//neck
fill(122, 15, 15);
rect(x+85, y+81, 30, 40);

//head
ellipse(x+100,y+57,85,100); 

//leftdimple
fill(255, 255, 255);
ellipse(x+55, y+97, 32, 66);

//rightdimple
fill(255, 255, 255);
ellipse(x+145, y+97, 32, 66);

//hat
fill(196, 178, 196);
arc(x+100, y+31, 72, 78, 184, 361);

//rightshoulder
fill(204, 49, 194);
quad(x+205, y+160, x+166, y+126, x+111, y+112, x+83, y+160);

//leftshoulder
fill(204, 49, 194);
quad(x+116, y+160, x+89, y+113, x+30, y+129, x-13, y+163);

//lefteye
fill(0, 0, 0);
ellipse(x+79, y+52, 10, 10);

//righteye
fill(0, 0, 0);
ellipse(x+117, y+52, 10, 10);

//mouth
fill(255, 255, 255);
arc(x+100, y+80, 36, 26, -2, 175);
line(111, 97, 118, 112);

//nose
fill(122, 15, 15);
stroke(0, 0, 0);
strokeWeight(2);
bezier(x+96, y+64, x+133, y+67, x+87, y+83, x+96, y+69);

//duragline
strokeWeight(5);
stroke(0, 0, 0);
line(x+134, y+30, x+66, y+31);

//namebadge
color(166, 61, 166);
text('O.M.', x+126, y+132, 94, 159);


