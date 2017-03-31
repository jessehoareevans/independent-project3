$(document).ready(function(){

  function digitCheck(string){
    var digits = new RegExp (/[0-9]/)
    var check = true;

    for (i=0; i<string.length; i++){
      if (digits.test(string[i])===false){
        check=false;
        break;
      }
    }
    if (check===false){
      return false;
    }
    else {
      return true;
    }
  }

  function divideNumber(number){
    var answer = [];
      for (i = 0, )

  }






  $('form#ping-pong').submit(function(event){

     var numberInput = $('#numberInput').val();
     if(digitCheck(numberInput)===false){
      $('#answer').text('Please enter a number');
    }

  event.preventDefault();
  });
});
