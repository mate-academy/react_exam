function displaceElement(
  array,
  shiftingStartIndex,
  indexToDisplace,
) {
  if (indexToDisplace === shiftingStartIndex) { return array; }

  const resultArray = [...array];

  const displacingElements = resultArray.splice(
    Math.min(shiftingStartIndex, indexToDisplace),
    Math.abs(shiftingStartIndex - indexToDisplace) + 1,
    'marker'
  );
  const displacingElement = indexToDisplace > shiftingStartIndex
    ? displacingElements.shift()
    : displacingElements.pop();

  if (indexToDisplace > shiftingStartIndex) {
    displacingElements.push(displacingElement);
  } else {
    displacingElements.unshift(displacingElement);
  }
  resultArray.splice(
    Math.min(shiftingStartIndex, indexToDisplace),
    1,
    ...displacingElements
  );

  return resultArray;
}

export default displaceElement;
