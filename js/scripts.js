var numberToWord = function(number) {


function convertNumberToWord(number){
  var answer = [];

  if (!number || number <= 0) {
    return false;
    for (var i = 1; i <= number; i++) {
      if(i % 15===0) {
        answer.push("ping-pong")
          }
      else if(i % 5===0) {
        answer.push("pong")
      }
      else if(i % 3===0) {
        answer.push("ping")
            }
    }
  }


    }
  }


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#input").val());
    var result = numberToWord(number);
  

      $(".output").text(number);

   $("#result").show();
  });
});





















// var pingPong = ["ping-pong", "pong", "pingPong"];
// var divisible = [15, 5, 3];
// var total = number;



//   if (( year % 15===0) || (year % 5 === 0) || (year % 3===0)) {
//     return true;
//   }  else {
//   return false;
//   }
// }
// };


// if ( i % 3 && i % 5) {
//   document.write(i);
// } else {
//   if (i % 3 === 0) {
//     document.write("ping");
//     skip= 1;
//   }
//   if (i%5 === 0) {
//     document.write("pong");
//     skip = 1
//   }
//   if (i%15 === 0) {
//     document.write("ping-pong")
//     skip = 1
//   }
// }
    // answer.push(divisble[j]);
    // total-=pingPong[j];
    // break

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
