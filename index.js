// add solution here
var beatlesLoops = []

function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < musicians.length; i++) {
        beatlesLoops.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return beatlesLoops
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(`${[facts]}!!!`);
    i++;
  }
  return newFacts
}




