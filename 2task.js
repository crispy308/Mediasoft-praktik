const sort = (array1, array2) => {
  const result = array1.sort((a, b) => {
    const aIndex = array1.indexOf(a);
    const bIndex = array1.indexOf(b);
    if (array2[aIndex] < array2[bIndex]) return -1;
    if (array2[aIndex] > array2[bIndex]) return 1;
    else return 0;
  });
  return result;
};
const arr1 = [1, 4, 6];
const arr2 = [11, 33, 22];
console.log(sort(arr1, arr2));
