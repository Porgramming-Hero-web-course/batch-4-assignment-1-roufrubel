// Problem-05


const personDetails = { name: "Alice", age: 30 }; 

function getProperty<X, Y extends keyof X>(obj: X, key: Y): X[Y] {
    return obj[key];
}

console.log(getProperty(personDetails, "name")); 
console.log(getProperty(personDetails, "age")); 