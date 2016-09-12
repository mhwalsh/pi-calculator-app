var calculateMe = function(calcObject) {
  console.log('inside my module');
  console.log('req.body=', calcObject);

  // object structure { x: 3, y: 4, type: add }
  var operator = calcObject.type;
  var x = Number(calcObject.x);
  var y = Number(calcObject.y);

  var answer;

  switch (operator) {
    case 'add':
      answer = x + y;
      break;
    case 'subtract':
      answer = x - y;
      break;
    case 'multiply':
      answer = x * y;
      break;
    case 'divide':
      answer = x / y;
      break;
    default:
      console.log('error');
      answer = 'operator error';
  }
  console.log(answer);
  return answer;
};
module.exports = calculateMe;
