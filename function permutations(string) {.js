function permutations(string) {

    //step 1: les cas ou string = 0 ou 1
    if (string.length == 0) return [];
    if (string.length ==1) return string;

    // step 2 loop

    for (let i = 0; i < string.length; i++) {
        const currentNum = string[i];
        remainingNums = string.slice(0, i).concat(string.slice(i + 1));
        console.log(currentNum, remainingNums, i)
    }

}


console.log(permutations('abc'))

















// let arrStr = string.split('').slice()
// //factoriel de string.length
// let factorialStr = 1;
// for(let i = 1; i< string.length; i++){
//     factorialStr += i*factorialStr
// }
// //return factorialStr

// for (let i = 0; i<factorialStr; i++ ){



// }
