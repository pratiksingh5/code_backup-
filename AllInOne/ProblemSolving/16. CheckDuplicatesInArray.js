var arr1 = [3, 4, 5, 6];
var arr2 = [6, 5, 4, 3];

const IsSame =
  arr1.length == arr2.length &&
  arr1.every((currentElem) => {
    if (arr2.indexOf(currentElem) > -1) {
      return (currentElem = arr2[arr2.indexOf(currentElem)]);
    }
  });

console.log(IsSame);
