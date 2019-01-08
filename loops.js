function forLoop(array) {
  for (let i = 0; i < 25; i++) {
<<<<<<< HEAD
      if(i === 1) {
        array.push("I am 1 strange loop.");
      }
      else {
        array.push("I am " + i + " strange loops.");
      }
  }
  return array;
}

function whileLoop (n){
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

var i = 0;
function incrementVariable() {
  i++;
}
function doWhileLoop(array) {
  do {
      --array.length;
      incrementVariable()
  } while (array.length > 0 && incrementVariable());
  return array;
=======
    if(i===1) {
      array[i] = "I am 1 strange loop.";
    }
    else {
      array[i] = "I am " + i + " strange loops.";
    }
  }
  return array;
>>>>>>> 9ee883f3dbb84aedc7852f2c509314df2b8acff3
}