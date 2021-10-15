function runProgram(arr) {


// * When passing an array to a function, the value of that array is a reference.
// * We have to clone it to break the reference.
  const newArr = arr.slice();
  newArr.push(5);

  console.log(arr); // * Original array which doesnot get changed
  console.log(newArr); // * New Array which got changed
}


// * Passing array as argument to the function
runProgram([1, 2, 3, 4]);
