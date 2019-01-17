const MunroView = function(container, munros) {
  this.container = container;
  this.munros = munros;
};

// we need to set a container property -- passed through from munroList - so that
// the elements below can be attached to something, not floating around in the DOM

MunroView.prototype.render = function() {
  const munroName = document.createElement('h2');
  munroName.textContent = this.munros.name;
  this.container.appendChild(munroName)

  const munroHeight = document.createElement('li');
  munroHeight.textContent = `Height: ${this.munros.height}`;
  this.container.appendChild(munroHeight);

  const munroRegion = document.createElement('li');
  munroRegion.textContent = `Region: ${this.munros.region}`;
  this.container.appendChild(munroRegion);

  const munroMeaning = document.createElement('li');
  munroMeaning.textContent = `Meaning: ${this.munros.meaning}`;
  this.container.appendChild(munroMeaning);
};



module.exports = MunroView;
