var leapYear = function(year) {
  if (( year%4===0) && (year % 100 !==0) || (year % 400===0)) {
    return true;
  }  else {
  return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

      $(".year").text(year);

    if (!result) {
     $(".not").text("not");
   } else {
     $(".not").text("");
   }

   $("#result").show();
  });
});






























// var digits = function(number) {
//
//
//   // if (( number%4===0) && (number % 100 !==0) || (number % 400===0)) {
//   //   return true;
//   // }  else {
//   // return false;
//   // }
// };
//
// $(document).ready(function() {
//   $("form#ping-pong").submit(function(event) {
//     event.preventDefault();
//     var number = parseInt($("input#numbers").val());
//     var results = [];
//
//     for( var i=1; i <= number; i++) {
//       var resulting = i
//
//       if (resulting%"3"===0) {
//         resulting = "ping"
//       };
//
//       // $(".list").append("<ul>" + result "</ul>");
//     };
//     // $("button#play").click(function(){
//     //     // $(("#list").append(("<ul>" + resulting "</ul>"));
//     // });
//
//    $("#result").show();
//   });
// });
