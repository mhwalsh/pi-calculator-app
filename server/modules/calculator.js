var calculateMe = function(calcObject) {
  console.log('inside my module');
  console.log('req.body=', calcObject);
};
module.exports = calculateMe;
