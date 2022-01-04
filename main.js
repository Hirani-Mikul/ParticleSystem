const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var ps = new ParticleSystem(new Vector(300, 20));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ps.addParticles();
  ps.update();
  requestAnimationFrame(draw);
}
draw();
