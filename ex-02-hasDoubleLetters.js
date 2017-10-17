/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
**/
function hasDoubleLetters(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i] + 1) {
      return true
    } else {
      return false
    }
  }
}
console.group('JS Iterations Week');
  console.log('%cFunction: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('stutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();
