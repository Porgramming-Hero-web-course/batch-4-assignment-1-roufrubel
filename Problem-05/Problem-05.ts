// Problem-05


const person = { name: "Alice", age: 30 }; 

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key];
}

console.log(getProperty(person, "name")); 
console.log(getProperty(person, "age")); 