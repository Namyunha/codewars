// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const newArr = str.split(" ");
  let newStr = "";

  newArr.forEach((el) => {
    if (/^[a-zA-Z]+$/.test(el)) {
      newStr += el.substring(1) + el[0] + "ay ";
    } else {
      newStr += el + " ";
    }
  });

  return newStr.trim();
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
