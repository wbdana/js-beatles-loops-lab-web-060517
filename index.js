function theBeatlesPlay(musicians, instruments) {
  var i = 0;
  var strings = [];
  for (i; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return strings;
}

function johnLennonFacts(facts) {
  var i = 0;
  var strings = [];
  while (i < facts.length) {
    strings.push(`${facts[i]}!!!`)
    i++
  };
  return strings;
}

function iLoveTheBeatles(number) {
  var strings = [];
  do {
    strings.push("I love the Beatles!")
    number++
  }
  while (number < 15);
  return strings;
}



//
//
// for (i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }
//
// Statement 1 sets a variable before the loop starts (var i = 0).
//
// Statement 2 defines the condition for the loop to run (i must be less than 5).
//
// Statement 3 increases a value (i++) each time the code block in the loop has been executed.

// while (i < 10) {
//     text += "The number is " + i;
//     i++;
// }
