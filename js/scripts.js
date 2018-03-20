//Business Logic

function pingpong(userNumber) {
  var answer = [];
  for (var index = 1; index <= userNumber; index += 1) {

    if (index % 15 === 0) {
      answer.push("pingpong");
    } else if (index % 3 === 0) {
      answer.push("ping");
    } else if (index % 5 === 0) {
      answer.push("pong");
    } else {
      answer.push(index);
    };
  };
  return answer;
};

//User Interface Logic

$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#userInput").val());
    console.log(userNumber);
    var userResult = pingpong(userNumber);
    var ul = $("ul#answer");

    for (var index=0; index < userResult.length; index++) {
      $("ul#answer").append("<li>" + userResult[index] + "</li>");
    };
  });
});
