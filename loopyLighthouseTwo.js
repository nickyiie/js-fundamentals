function loopyLighthouse(range, multiples, words){
  var output = "";
  for(var i = range[0]; i <= range[1]; i++){
    output = "";
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      output += words;
    } else if (i % multiples[0] === 0) {
      output = words[0];
    } else if (i % multiples[1] === 0) { 
      output = words[1];
    } else output = i
}
}
console.log (loopyLighthouse([15,90], [2,5], ["Batty", "Beacon"]));
