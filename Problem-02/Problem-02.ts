// Problem-02


function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((number, index) => numbers.indexOf(number) === index);
}

const myNumbers = [1, 2, 2, 3, 4, 4, 5, 6, 7,7, 8]
console.log(removeDuplicates(myNumbers)); 