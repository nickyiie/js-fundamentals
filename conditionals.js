const raining = false;
let cold = true;
let temperature = 20;

if (raining) { 
  console.log ("Don't forget your umbrella!");
}
if (cold && temperature <=0) {
  console.log("Make sure you pick out a scarf," + " and don't forget a jacket!");
} else if (cold && (temperature >=1 && temperature<=10)) {
  console.log("Make sure you pick out a scarf, " + "and a sweater and you will be just fine.");
} else (!cold || temperature >=10) 
console.log ("Short sleeves are just fine."); 

 console.log ("Now you're ready to go outside!");
