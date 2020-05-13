
function howManyHundreds(num) {
  const amountFull= num / 100
  if (num % 100 === 0) {
    return amountFull
  } else if (num % 100 !== 0) {
    return Math.trunc(amountFull)
  } else {
    return amountFull = 0;
  }
  
}

  console.log(howManyHundreds(1234))