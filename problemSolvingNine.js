function mergeAndSortArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const uniqueSortedArray = [...new Set(mergedArray)].sort((a, b) => a - b);

    return uniqueSortedArray;
}
const array1 = [3, 1, 4];
const array2 = [2, 4, 5];
const result = mergeAndSortArrays(array1, array2);

console.log(result); 
