
function range(start, end, step) {
  let ragu = [];
  if ( start !== undefined && end !==undefined && step !== undefined && start < end && step >= 0)
    for ( i = start; i <= end; i += step) {
      ragu.push(i)
    }
    return ragu;
  }

console.log(range(0,8,2));