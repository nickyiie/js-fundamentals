

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

function finalPosition(moves) {
  const coordinates = [0,0];
  
  for (const move of moves) {
    switch (move) {
      case "north":
        coordinates[1] +=1;
      case "south":
        coordinates[1] -=1;
      case "west":
        coordinates[0] -=1;
      case "east":
        coordinates[0] +=1;   
    }
  }
  return coordinates;
}
console.log(finalPosition(moves));