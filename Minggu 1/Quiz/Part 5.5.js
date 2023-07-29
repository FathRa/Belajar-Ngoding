// 1. Lets form a sentence
let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

let sentence =
  word +
  " " +
  second +
  " " +
  third +
  " " +
  fourth +
  " " +
  fifth +
  " " +
  sixth +
  " " +
  seventh;

console.log("sentence:", sentence);

// 2. Index Accessing - 1 by 1
let word2 = "wow JavaScript is so cool";
let firstWord = word2[0] + word2[1] + word2[2];
let secondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];

let thridWord = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19] + word2[20];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];
let sentence2 =
  firstWord +
  " " +
  secondWord +
  " " +
  thridWord +
  " " +
  fourthWord +
  " " +
  fifthWord;

console.log(sentence2);

// 3. Breaking Sentence (Again) using Substring
let word3 = "wow JavaScript is so cool";
let firstWord3 = word2.substring(0, 3);
let secondWord3 = word2.substring(3, 14);
let thridWord3 = word2.substring(14, 16);
let fourthWord3 = word2.substring(18, 19);
let fifthWord3 = word2.substring(20, 25);

let sentence3 =
  firstWord3 + secondWord3 + thridWord3 + fourthWord3 + fifthWord3;

console.log(sentence3);

// 4. Breaking Sentence (yet Again) and Count Each Length
let word4 = "wow JavaScript is so cool";
let firstWord4 = word4.substring(0, 3);
let firstWord4Length = firstWord4.length;
console.log("First Word: " + firstWord4 + ", with length: " + firstWord4Length);

let secondWord4 = word4.substring(4, 14);
let secondWord4Length = secondWord4.length;
console.log(
  "second Word: " + secondWord4 + ", with length: " + secondWord4Length
);

let thirdWord4 = word4.substring(15, 17);
let thirdWord4Length = thirdWord4.length;
console.log("third Word: " + thirdWord4 + ", with length: " + thirdWord4Length);

let fourthWord4 = word4.substring(18, 20);
let fourthWord4Length = fourthWord4.length;
console.log(
  "fourth Word: " + fourthWord4 + ", with length: " + fourthWord4Length
);

let fifthWord4 = word4.substring(21, 25);
let fifthWord4Length = fifthWord4.length;
console.log("fifth Word: " + fifthWord4 + ", with length: " + fifthWord4Length);
