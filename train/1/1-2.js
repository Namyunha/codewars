// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let arr = str.split(/[-_]/);
  let result = arr.map((word, idx) =>
    idx === 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  return result.join("");
}

// 예제 실행
console.log(toCamelCase("a_Cat_was_cute"));

console.log(toCamelCase("The_Stealth_Warrior"));

console.log(toCamelCase("The_Stealth-Warrior"));
