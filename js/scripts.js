$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var total = 0;
    var userNumber = parseInt($("input#userInput").val());
    var numberArray = [];
    var li = $("<li>").appendTo("#answer");
    var json = {numbers: numberArray}

    for (index = 1; index <= userNumber; index += 1) {
      if (index % 3 === 0 && index % 5 === 0) {
        numberArray.push("pingpong");
      } else if (index % 5 === 0) {
        numberArray.push("pong");
      } else if (index % 3 === 0) {
        numberArray.push("ping");
      } else {
        numberArray.push(index);
      }
    }
    $(json.numbers).map(function(index, item) {
      li.append($(document.createElement("li")).text(item));
    });
  });
});
