import peasy.*;

float x=0.1;
float y=0;
float z=0;

float a = 10;
float b = 28;
float c = 8/3;

ArrayList<PVector> points = new ArrayList<PVector>();

PeasyCam cam;

void setup() {
  size(800, 600, P3D);
  colorMode(HSB);
  cam = new PeasyCam(this, 500);
}
float ro = 0;
void draw() {
  //ro += 0.01;
  //rotateY(ro);
  background(0);
  
  float dt = 0.01;
  float dx = (a * (y-x)) * dt;
  float dy = (x * (b-z)-y) * dt;
  float dz = (x * y - c * z) * dt;

  x = x + dx;
  y = y + dy;
  z = z + dz;
  
  points.add(new PVector(x, y, z));
  
  translate(0, 0, -80);
  scale(5);
  stroke(255);
  
  
  float hu = 0;
  noFill();
  beginShape();
  for(PVector v : points){
    stroke(hu, 255, 255);
    vertex(v.x,v.y,v.z);
    hu += 0.1;
    if(hu > 255)
      hu = 0;
  }
  endShape();
  
  
}