function findMissingNumber(arr) {
    
    const n = arr.length; 
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    
    return expectedSum - actualSum;
}


const missingNumber = findMissingNumber([0, 1, 2, 3, 5]);
console.log(missingNumber); 
