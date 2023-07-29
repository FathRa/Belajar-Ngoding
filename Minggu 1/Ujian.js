// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.

const bandingkanAngka = (angka1, angka2) => {
  return angka2 > angka1 ? true : angka1 > angka2 ? false : "-1";
};

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

const balikKata = (params) => {
  let reverseWord = "";

  for (let index = params.length - 1; index >= 0; index--) {
    reverseWord += params[index];
  }

  return reverseWord;
};

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

const konversiMenit = (params) => {
  menit = Math.floor(params / 60);
  detik = params % 60;
  detik = detik < 10 ? "0" + detik : detik;

  return menit + ":" + detik;
};

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

const xo = (params) => {
  let countX = 0;
  let countO = 0;
  for (let index = 0; index < params.length; index++) {
    if (params.charAt(index) == "x") {
      countX++;
    }

    if (params.charAt(index) == "o") {
      countO++;
    }
  }

  return countX == countO ? true : false;
};

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
