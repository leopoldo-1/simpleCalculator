//display the number from 0 to 100,10 by 10
//10 20 30 40... 100

// for (let i = 0; i <= 100; i += 10) {
//   console.log(i);
//   document.write(`${i} <br>`)
// }

//create the function
function calculatingTotal(price, qty) {
  let subtotal = price * qty;
  return subtotal;
}

function calculatingTaxes(subtotalParam) {
  let taxes = subtotalParam * 0.16;
  let total = subtotalParam + taxes;
  // myGlobal = 99;
  return total;
}

let laptop = calculatingTotal(1000, 3);
let speakers = calculatingTotal(200, 2);

// console.log(laptop);

console.log(calculatingTaxes(laptop));
console.log(calculatingTaxes(speakers));
// console.log(calculationTaxes());
// calculationTaxes()
