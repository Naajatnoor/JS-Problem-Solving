
// let str = 'noor';

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);

//     if (
//         str[i] == 'a' || str[i] == 'e' || str[i] == 'i' ||
//         str[i] == 'o' || str[i] == 'u' ||
//         str[i] == 'A' || str[i] == 'E' || str[i] == 'I' ||
//         str[i] == 'O' || str[i] == 'U'
//     ) {
//         count++;
//         console.log(str[i]);
//     }

//     console.log(count);
// }

// console.log("Total vowels:", count);



function countVowels(str){
let vowels='aeiou';
    let count =0;
    for(let i=0;i<str.length;i++){
        let letter= str[i];
        console.log('i, -> letter->>> ',i ,letter);
        if(vowels.includes(letter)){
            console.log(vowels);
            count++;
        }
    }
    return count;


}

console.log(countVowels('programming hero'));