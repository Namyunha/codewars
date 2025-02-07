// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const newArr = str
    .split(" ")
    .map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.slice(1) + word[0] + "ay";
      }
      return word;
    })
    .join(" ");
  return newArr;
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
