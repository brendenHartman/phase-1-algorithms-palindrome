function isPalindrome(word) {
  let result = false;
  if(word.length % 2 === 0 ){
    let backHalf = word.slice(word.length / 2);
    let backHalfr = backHalf.split('').reverse().join('');
    if(word.slice(0,word.length/2)===backHalfr){
      result = true;
    }
  }
  else{
    let backHalf = word.slice(Math.ceil(word.length/2));
    let backHalfre = backHalf.split('').reverse().join('');
    if(word.slice(0,Math.floor(word.length/2)) === backHalfre){
      result = true;
    }
  }
  return result;
}

/* 
initialize our result variable to be changed accordingly.
  check if word has an even number or odd number of characters
    if even cut the word in half
      check the first half to the second half
        change result accordingly
    if odd take the first half and compare it to the second half excluding middle letter
      check the two halves
        change result accordingly
  return result

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=> ", isPalindrome('bob'));

}

module.exports = isPalindrome;
