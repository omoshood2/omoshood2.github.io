
noStroke();

//neck
fill(122, 15, 15);
rect(185, 181, 30, 40);

//head
ellipse(200,157,85,100); 

//leftdimple
fill(255, 255, 255);
ellipse(155, 197, 32, 66);

//rightdimple
fill(255, 255, 255);
ellipse(245, 197, 32, 66);

//hat
fill(196, 178, 196);
arc(200, 131, 72, 78, 184, 361);

//rightshoulder
fill(204, 49, 194);
quad(305, 260, 266, 226, 211, 212, 183, 260);

//leftshoulder
fill(204, 49, 194);
quad(216, 260, 189, 213, 130, 229, 87, 263);

//lefteye
fill(0, 0, 0);
ellipse(179, 152, 10, 10);

//righteye
fill(0, 0, 0);
ellipse(217, 152, 10, 10);

//mouth
fill(255, 255, 255);
arc(200, 180, 36, 26, -2, 175);
line(111, 97, 118, 112);

//nose
fill(122, 15, 15);
stroke(0, 0, 0);
strokeWeight(2);
bezier(196, 164, 233, 167, 187, 183, 196, 169);

//duragline
strokeWeight(5);
stroke(0, 0, 0);
line(234, 130, 166, 131);

//namebadge
color(166, 61, 166);
text('O.M.', 226, 232, 94, 159);


