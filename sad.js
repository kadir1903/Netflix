let name = "naber";
console.log(name);
const sos = 5;
console.log(sos);
{
  const sos = 8;
  console.log(sos);
}
const nm = "ismet";
const yas = 1969;
let tarih = new Date();
console.log(`${nm} is ${tarih - yas} years old`);
console.log(tarih);

let r = Number(prompt("sayi alabilirmiyim canim"));
console.log(r);
const pi = 3.14;
const tiop = pi * r * r;
// console.log(`square of circle ${Math.trunc(tiop)}`);
// console.log(`square of circle ${Math.round(tiop)}`);
// console.log(`square of circle ${Math.ceil(tiop)}`);
// console.log(`square of circle ${Math.floor(tiop)}`);
// console.log(`square of circle ${tiop.toFixed(3)}`);
console.log(Math.floor(tiop));
const isakl = Math.random();
console.log((isakl * 100).toFixed(2));
console.log(isNaN(isakl));
let yaso = 56;
let kado = 55;
console.log(yaso == kado);
console.log(yaso === kado);
console.log(yaso != kado);
console.log(yaso !== kado);
console.log(yaso > kado);
