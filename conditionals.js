const raining = true;
const cold = true;
let temperature = 40;

if (raining) { 
  console.log ("Don't forget your umbrella!");
}
if (cold && temperature <=0) {
  console.log("Make sure you pick out a scarf," + " and don't forget a jacket!");
} else if (cold && (temperature >=1 && temperature<=10)) {
  console.log("Make sure you pick out a scarf, " + "and a sweater and you will be just fine.");
} else (!cold || (temperature >=10 && temperature <=39)); {
console.log ("Short sleeves are just fine."); 
}
// why is the above still being returned is the conditionals are not being met?
 console.log ("Now you're ready to go outside!");

 const isCitizen = true;
 const age = 26;

 if (isCitizen && age > 18) {
   console.log("You are eligible to vote");
 }

 if (temperature < -40 || temperature >=40) {
   console.log("Maybe going outside isn't such a great idea...");
 }

 if (!raining) {
   console.log("Leave your umbrella at home!")
 }
