var x=10;
var y=1;
var speed=round(random(1,10));

var frogx = 107;
var frogy = 243;
var frogspeed = round(random(1,10));

var rabbitx = 18;
var rabbity = 266;
var rabbitspeed = round(random(1,10));

draw = function() {
noStroke();
background(255, 255, 255);

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
//break

x = x + speed;

//frog
noStroke();


fill(30, 204, 91); // a nice froggy green!
//break
ellipse(frogx, frogy, 200, 100); // face
ellipse(frogx - 50, frogy - 50, 40, 40); // left eye socket
ellipse(frogx + 50, frogy - 50, 40, 40); // right eye socket
//break
fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogx - 50, frogy - 50, 30, 30); // left eyeball
ellipse(frogx + 50, frogy - 50, 30, 30); // right eyeball
//break
fill(0, 0, 0);
rect(frogx+49,frogy-56,10,10); //righteye
rect(frogx-55,frogy-48,10,10); //lefeye
//mouth
fill(0, 0, 0);
ellipse(frogx, frogy, 137, 60);


//break
frogx = frogx + frogspeed;

//rabbit


noFill();
stroke(0, 0, 0);
var eyesize = 33;

ellipse(rabbitx+50, rabbity-30, 60, 120);  // left ear
ellipse(rabbitx+140, rabbity-30, 60, 120);  // right ear

fill(255, 255, 255);
ellipse(rabbitx+100, rabbity+70, 150, 150);    // face

fill(0, 0, 0);
ellipse(rabbitx+70, rabbity+50, eyesize, eyesize);  // left eye
ellipse(rabbitx+130, rabbity+50, eyesize, eyesize);  // right eye

line(rabbitx+50, rabbity+100, rabbitx+150, rabbity+100);   // mouth

var teeth = 27;

noFill();
rect(rabbitx+85, rabbity+100, 15, teeth); // left tooth
rect(rabbitx+100, rabbity+100, 15, teeth); // right tooth

rabbitx = rabbitx + rabbitspeed;
};

