// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  if (!str) return ""; // 빈 문자열 처리

  // 구분자로 나누기 (- 또는 _)
  const words = str.split(/[-_]/);

  // 첫 번째 단어는 원래 대소문자 그대로, 나머지는 첫 글자를 대문자로 변환
  return words
    .map((word, index) => {
      if (index === 0) {
        return word; // 첫 단어는 그대로 반환
      }
      // 첫 글자를 대문자로, 나머지는 그대로
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

// 예제 실행
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase("The_Stealth-Warrior")); // "TheStealthWarrior"
