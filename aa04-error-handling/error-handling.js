// 1.
function sum(array) {
  try {
    if (!Array.isArray(array)) throw new Error()
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
  } catch (error) {
    console.log('Expects array of numbers')
  }
}

let res = sum(null);
// console.log(res);

// 2.
// tests
try {
  sayName("Alex");
} catch (error) {
  console.log(error.message)
}
try {
  sayName(1);
} catch (error) {
  console.log(error.message)
}
function sayName(name) {
  if (typeof name !== "string") throw new Error("Invalid name! Must be a string!");

  console.log(`My name is ${name}`);
}
//   if (typeof name === "string") {
//     console.log(`My name is ${name}`)
//   }
//   throw new Error('Invalid name! Must be a string!')
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  console.log(error.message)
} finally {
  console.log('Hello World!')
}
