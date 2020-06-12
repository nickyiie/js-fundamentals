const judgeVegetable = (vegetables, metric) => {
  let descriptor = 0;
  let name;
  vegetables.forEach((vegetable) => {
    if (vegetable[metric] > descriptor) {
      descriptor = vegetable[metric];
      name = vegetable.submitter;
    }
  });
  
  return name;
};