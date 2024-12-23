function generateGreeting(name, timeOfDay, language) {
    
    const greetings = {
        English: {
            morning: "Good morning",
            afternoon: "Good afternoon",
            evening: "Good evening"
        },
        Spanish: {
            morning: "¡Buenos días",
            afternoon: "¡Buenas tardes",
            evening: "¡Buenas noches"
        }
    };
    if (greetings[language] && greetings[language][timeOfDay]) {
        return `${greetings[language][timeOfDay]}, ${name}!`;
    } else {
        return `Hello, ${name}!`; 
    }
}


console.log(generateGreeting("Hasib", "morning", "English"));  
console.log(generateGreeting("Hasib", "morning", "Spanish")); 
console.log(generateGreeting("Hasib", "night", "English"));   
