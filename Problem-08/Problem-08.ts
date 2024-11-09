// Problem-08


const person = { name: "Rubel", age: 25, email: "rubel@gmail.com" };

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}


console.log(validateKeys(person, ["name", "age"]));  
// console.log(validateKeys(person, ["name", "address"]));  