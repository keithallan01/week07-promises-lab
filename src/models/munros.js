const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function() {
  this.data = [];
};


Munros.prototype.getData = function() {
  const url = `https://munroapi.herokuapp.com/munros`,
  const request = new RequestHelper(url);

  const myPromise = request.get();

  myPromise.then((data) => {
    this.data = data.message;
    PubSub.publish('Munros:data-ready', this.data);
    console.log(this.data);
  })
  .catch((err) => {
    console.error(err);
  })
};

Munros.prototype.handleDataReady = function(munros) {
  return munros;
};



module.exports = Munros;
