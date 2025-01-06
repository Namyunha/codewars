//  Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters
//  then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
  const count = str.length % 2 === 1 ? str.length + 1 : str.length;
  const newArr = [];

  for (let i = 0; i < count; i++) {
    let word = str.slice(i, i + 2);
    word = word.length === 1 ? word + "_" : word;
    newArr.push(word);
    i++;
  }
  console.log(newArr);
}

solution("abcdef");
