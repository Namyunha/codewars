//  Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters
//  then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  let newStr = str.length % 2 == 0 ? str : str + "_";
  let arr = [];
  let second = newStr;
  for (let i = 0; i < newStr.length / 2; i++) {
    arr.push(second.slice(0, 2));
    second = second.slice(2);
  }
}

solution("abcdef");
