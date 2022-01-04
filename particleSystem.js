function ParticleSystem(origin) {
  this.origin = origin.clone();
  this.Particles = [];
}
ParticleSystem.prototype.addParticles = function () {
    this.Particles.push(new Particle(this.origin));
};
ParticleSystem.prototype.update = function () {
  for (let p of this.Particles) {
    p.run();
  }
  this.Particles = this.Particles.filter((p) => !p.isDead());

};