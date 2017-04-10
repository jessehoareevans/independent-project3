function numberToWord(number){
  for(var i = number; i <= number; i++){

if(i % 15===0) {
  $("ul").append("<li>" + "ping-pong" + "</li>");
  }

 else if (i % 5 === 0) {
  $("ul").append("<li>" + "pong"+ "</li>");
  }

else if(i % 3 === 0) {
  $("ul").append("<li>" + "ping" + "</li>");
  }

else{
  $("ul").append("<li>" + i + "</li>");
  }

};
};





$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var input= parseInt($("#input").val());
    var number= input;
    if (!number || number <= 0) {
      alert ("Please enter a positive integer.");
  };
  numberToWord(number);

  });
});
