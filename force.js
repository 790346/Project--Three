function Force(m, x, y){
  this.mass = m;
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(0,0);
  this.acceleration = new JSVector(0,0);

}
