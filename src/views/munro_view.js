const MunroView = function(container, munros) {
  this.container = container;
  this.munros = munros;
};

MunroView.prototype.render = function() {
  const variable = document.createElement('h2');
  variable.textContent = this.munros.name;
  this.container.appendChild(variable)

}

MunroView.prototype.createMunroList = function() {
  const munrosList = document.createElement('ul');
  munrosList.classList.add('munros');
  this.populateList(munrosList);
  return munrosList;
}

MunroView.prototype.populateList = function(list) {
  console.log(this.munros)
  this.munros.forEach((munro) => {
    const munroListItem = document.createElement('li');
    munroListItem.textContent = munro.name;
    list.appendChild(munroListItem);
  });
}


module.exports = MunroView;
