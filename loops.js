function forLoop(array) { 
  for ( let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
     } 
     else {
      array.push(`I am ${i} strange loops.`)
    }
  }
return array;
}

function whileLoop(array) {
  let countdown = i; 
  for ( let i = 100; i >= 0; i--) {
    while (countdown >= 0) {
      console.log(i)
      if (i===0) {
        return 'done'
      }
  }
}