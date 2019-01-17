const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function() {
  this.data = [];
};


Munros.prototype.getData = function() {
  const url = `https://munroapi.herokuapp.com/munros`;
  const request = new RequestHelper(url);

  const myPromise = request.get();

  myPromise.then((data) => {
    this.data = data;
    console.log(this.data);
    // check that the this.data (property) is correct - this.data and then console log it to
    // show it in the browser - and check the API is coming through in the browser console

    PubSub.publish('Munros:data-ready', this.data);
  })
  .catch((err) => {
    console.error(err);
  })
};

// Munros.prototype.handleDataReady = function(munros) {
//   return munros;
// };



module.exports = Munros;
