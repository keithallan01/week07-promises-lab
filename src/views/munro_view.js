const MunroView = function(container, munros) {
  this.container = container;
  this.munros = munros;
};

MunroView.prototype.render = function() {
  const munroName = document.createElement('h2');
  munroName.textContent = this.munros.name;
  this.container.appendChild(munroName)

  const munroHeight = document.createElement('p');
  munroHeight.textContent = this.munros.height;
  this.container.appendChild(munroHeight);

  const munroMeaning = document.createElement('p');
  munroMeaning.textContent = this.munros.meaning;
  this.container.appendChild(munroMeaning);
};



module.exports = MunroView;
