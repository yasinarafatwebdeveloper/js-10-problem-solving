function customMap(array, callback) {
    
    const resultArray = [];
    
    
    for (let i = 0; i < array.length; i++) {
        
        const result = callback(array[i], i, array);
        
        resultArray.push(result);
    }
    

    return resultArray;
}


const numbers = [1, 2, 3, 4];
const doubled = customMap(numbers, num => num * 2);

console.log(doubled); 
