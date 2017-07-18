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
