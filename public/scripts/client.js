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

    $.ajax({
      type: 'POST',
      url: '/',
      data: toSend,
      success: function(result) {
        console.log('succes, result=', result);
        //display
      },
      error: function() {
        console.log('error connecting to server');
      }
    }); // end ajax
  }); // end of calculate on click
}); // end of doc ready
