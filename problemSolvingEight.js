function formatFullName({ firstName, lastName, middleName = "", title = "" }) {
    
    const fullName = `${title ? title + " " : ""}${firstName} ${middleName ? middleName + " " : ""}${lastName}`;
    return fullName.trim();
}
console.log(formatFullName({ firstName: "John", lastName: "Doe" })); 

console.log(formatFullName({ firstName: "John", middleName: "Paul", lastName: "Doe" })); 


console.log(formatFullName({ firstName: "John", lastName: "Doe", title: "Dr." })); 


console.log(formatFullName({ firstName: "John", middleName: "Paul", lastName: "Doe", title: "Mr." })); 

