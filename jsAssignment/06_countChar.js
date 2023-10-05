function countCharA(str) {
var count =0;
    var charA="A"
  for (let index = 0; index <str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if (charA.includes(char)) {
        count=count + 1;
    }
    
  }
  console.log(`Total numbers Character "a" or "A" Available in Given String: ${count} `);
}
countCharA('I AM Learning JavaScript, The Language of internet');
countCharA("My favourite movie is LAggAn");
