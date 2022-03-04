// console.log('calculator');

function calculation() {
  console.log("calculating..");
  //get the values from the prompt and store the in two vars
  let number1 = Number(prompt("Enter the number 1:"))
  // let num2 = Number(prompt("Number 2"))

  //do the operations and store the results in vars(you need 4 vars)
  let sum = number1 + 10

  //display the result in the html

  document.getElementById("results").innerHTML = `
  <p>The sum is: ${sum}</p>`
}
