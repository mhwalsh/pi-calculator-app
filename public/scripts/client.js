console.log('sourced');

$(function() {
  console.log('ready');

  $('#calculate').on('click', function() {
    console.log('calculate clicked');

    // strings now... validation?
    var val1 = $('#val1').val();
    var val2 = $('#val2').val();

    var operator = $('#operator').val();

    var toSend = {
      x: val1,
      y: val2,
      type: operator
    };
    console.log('toSend', toSend);
  });
});
