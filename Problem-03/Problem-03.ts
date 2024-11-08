// Problem03


function countWordOccurrences(sentence: string, word: string): number {
    const fullSentence = sentence.toLowerCase().split(" ");
    const singleWord = word.toLowerCase();

    return fullSentence.filter(part => part === singleWord).length;
}

const mySentence = 'I read book daily around two hours. And my favorite book is relevant with programming';
const myWord = 'book';
console.log(countWordOccurrences(mySentence, myWord)); 
