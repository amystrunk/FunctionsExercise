// Functions Exercise
// 1
function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();
console.log(`=1`.repeat(15));

// 2
function beaker(speak){
    console.log(speak.repeat(4));
}
beaker(`Meep`);
console.log(`=2`.repeat(15));

// 3
function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
        return (`It's time to play  the music. It's time to light the light.`);
    }
    return ``;
}
console.log(muppetShow(`Muppet`, `Show`));
console.log(muppetShow(`Hi`, `Bye`));
console.log(`=3`.repeat(15));

// 4
function kermit(){
    console.log(`Kermit the Frog`); 
}
kermit();
console.log(`=4`.repeat(15));

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));
console.log(`=5`.repeat(15));
// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();
console.log(`=6`.repeat(15));

// 7
// rainbowConnection = () => console.log(`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
// OR
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
console.log(rainbowConnection());

rainbowConnection();
console.log(`=7`.repeat(15));

// 8
// No

// 9
// Yes

// Bonus
// 10a
const newMuppetsMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

// 10b
const upperMovies = newMuppetsMovies.map(movie => movie.toUpperCase());
console.log(upperMovies);
console.log(`=10b`.repeat(15));

// 11a
const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);
console.log(a);

console.log(`=11`.repeat(15));

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    "The Swedish Chef", 
    "Animal",
    "Rowlf"
];

// 12c
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

// 12d
randomMuppet(charactersOne)
randomMuppet(charactersTwo);

console.log(`=12`.repeat(15));

// 13
/*
caps = string => {
    let chars = string.toLowerCase().split(``);
    for(i = 0; i < chars.length; i += 2){
        chars[i] = chars[i].toUpperCase();
    }
    console.log(chars.join(``));
}
caps(`Hello World`)
*/

// OR
/*
caps = (string) => {
    return string.split(``).map((v, i) => i % 2 ? v.toLowerCase() : v.toUpperCase()).join(``);
}
console.log(caps(`Hello World`));
*/

// OR
// caps = (string) => {
//     let newString = ``;
//     for (i = 0; i < string.length; i++){
//         if (i % 2 === 0){
//             newString += string[i].toUpperCase();
//         } else {
//             newString += string[i].toLowerCase();
//         }
//     }
//     return newString;
// }
// console.log(caps(`Hello World`));

// 13 Extra Bonus
caps = string => {
    let count = 0;
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString; 
}
console.log(caps(`Hello World`));