// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
  const list = [];
  for (let i = 0; i < str.length; i++) {
    let number = str[i].charCodeAt();
    let sum = number + 13;
    if (number === 32) {
      sum = number;
    }
    if (number > 64 && number < 91) {
      sum = sum > 90 ? sum - 90 + 64 : sum;
    } else if (number > 96 && number < 123) {
      sum = sum > 122 ? sum - 122 + 96 : sum;
    } else {
      sum = number;
    }
    str.replace(str[i], String.fromCharCode(sum));
    list.push(String.fromCharCode(sum));
  }
  return list.join("");
}

console.log(rot13("EBG13 rknzcyr."));
//  -> "Guvf vf zl svefg EBG13 rkprepvfr!"
