// 1

// Looping Pertama
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}

// Looping Kedua
let ii = 10;
while (ii > 0) {
  ii--;
  console.log(ii);
}

//2

// Looping Pertama
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

// Looping Kedua
for (let index = 10; index > 0; index--) {
  console.log(index);
}

// 3
for (let index = 0; index < 100; index++) {
  index % 2 == 0 ? console.log("Genap") : console.log("Ganjil");
}

// 4
for (let index = 0; index < 100; index += 2) {
  index % 3 == 0 ? console.log("3 kelipatan 3") : console.log(index);
}

for (let index = 0; index < 100; index += 5) {
  index % 6 == 0 ? console.log("6 kelipatan 6") : console.log(index);
}

for (let index = 0; index < 100; index += 9) {
  index % 10 == 0 ? console.log("10 kelipatan 10") : console.log(index);
}
