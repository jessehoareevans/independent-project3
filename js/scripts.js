var digits = function(number) {


  // if (( number%4===0) && (number % 100 !==0) || (number % 400===0)) {
  //   return true;
  // }  else {
  // return false;
  // }
};

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#numbers").val());
    var results = [];

    for( var i=1; i <= number; i++) {
      var resulting = i

      if (resulting%"3"===0) {
        resulting = "ping"
      };

      // $(".list").append("<ul>" + result "</ul>");
    };
    $("button#play").click(function(){
        $(("#list").append(("<ul>" + resulting "</ul>"));
    });

   $("#result").show();
  });
});
