// Problem-01


function sumArray(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const rollNumbers = [1, 2, 3, 4, 5];
console.log(sumArray(rollNumbers)); 
