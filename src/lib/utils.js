function displaceElement(
  array,
  shiftingIndex,
  shiftToIndex,
) {
  if (shiftToIndex === shiftingIndex) { return [...array]; }

  const resultArray = [];
  const shiftingSign = shiftToIndex > shiftingIndex ? 1 : -1;
  let hasShifting = false;

  for (let index = 0; index < array.length; index += 1) {
    if (index === shiftToIndex) {
      hasShifting = !hasShifting;
      resultArray.push(array[shiftingIndex]);
    } else if (index === shiftingIndex) {
      hasShifting = !hasShifting;
      resultArray.push(array[shiftToIndex]);
    } else if (hasShifting) {
      resultArray.push(array[index + shiftingSign]);
    } else {
      resultArray.push(array[index]);
    }
  }

  return resultArray;
}

export default displaceElement;
