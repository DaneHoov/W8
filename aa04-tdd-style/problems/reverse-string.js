module.exports = function reverseString(string) {
  if(typeof string !== "string") throw new TypeError("Please enter valid string")

  return string.split('').reverse().join('')
  };

  // try {
  //   reverseString()
  // } catch (error) {
  //   console.log("You're an idiot")
  // }
