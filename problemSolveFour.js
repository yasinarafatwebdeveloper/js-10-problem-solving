function reverseWords(input) {
    const words = input.split(' ');
    const reversedWords = words.reverse();


    return reversedWords.join(' ');
}


const result = reverseWords('Hello World');
console.log(result); 
