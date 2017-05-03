var getMatches = function(patt, base) {
  var matches = [];
  if(!(patt instanceof RegExp)) {
    patt = new RegExp(patt);
  }
  do {
    var match = patt.exec(base);
    if(match) {
      var position = match.index;
      var mainMatch = match[0];
      match = match.slice(1);
      delete match.index;
      delete match.input;
      matches.push({
      	match: mainMatch,
      	groups: match,
      	position: position
      });
    }
  } while(match);
  return matches;
};
