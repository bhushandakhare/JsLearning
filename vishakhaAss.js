function squareOfWordLength() {
    var lengthStr = "JavaScript";
    console.log(`Given Word Is : ${lengthStr}`);
  
    var lengthStr1 = lengthStr.length;
    console.log(`1. Find the String length: ${lengthStr1}`);
  
    var squareStr = lengthStr1 ** 2;
    console.log(`2. Find the Square of String: ${squareStr}`);
  
    console.log("----------------------------1.3.2----------------------");
  
    var str2 = "Google Chrome";
    console.log(`Given Word Is: ${str2}`);
  
    var lengthStr2 = str2.length;
    console.log(`1.3.2: Find the String length: ${lengthStr2}`);
  
    var squareStr2 = lengthStr2 ** 2;
    console.log(`1.3.2: Find the Square of String: ${squareStr2}`);
  
    console.log("----------------------------1.3.3----------------------");
  
    var str3 = "Developer Smart";
    console.log(`Given Word Is: ${str3}`);
  
    var lengthStr3 = str3.length;
    console.log(`1.3.3: Find the String length: ${lengthStr3}`);
  
    var squareStr3 = lengthStr3 ** 2;
    console.log(`1.3.3: Find the Square of String: ${squareStr3}`);
  }
  
  squareOfWordLength();
  
  console.log(
    "************** STEP-02  ****************"
  );
  
  function angularDeveloper() {
    var strWord = "I am Angular Developer";
    console.log(`Given string is : ${strWord}`);
  
    var lengthOfWord = strWord.length;
    console.log(`Words In Given String : ${lengthOfWord}`);
  
    var splitWord = strWord.split(" ");
    console.log(`Words In Given String: ${splitWord}`);
  
    var splitWordLength = splitWord.length;
    console.log(`Number of Words In Given String : ${splitWordLength}`);
  
    console.log("----------------------------Step 2.1----------------------");
  
    var divide = lengthOfWord / splitWordLength;
    console.log(`Result of dividing String Length by Number Of Words: ${divide}`);
  
    console.log("----------------------------Step 2.2----------------------");
  
    var mul = lengthOfWord * splitWordLength;
    console.log(`Result of Multiplying String Length by Number Of Words: ${mul}`);
  }
  
  angularDeveloper();