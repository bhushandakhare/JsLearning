console.log('=================================== Assignment Hands On ==========================================');
console.log("                                                                                                  ");
function stringHandsOn() {
    var str="     Hey you are doing good, keep it up    ";
    console.log(`1. Given String is: ${str}`);

    var len =str.length;
    console.log(`2. Length of String ${len}`);

    var remove=str.trim();
    console.log(`3. removing the extra spaces: ${remove}`);
    var leng=remove.length;
          console.log(`   length after removing Spaces: ${leng}`);
 
   var result = len-leng;
    console.log(`4.Total No. of Spaces removed: ${result}`);

    var firstChar=remove.charAt(0);
     console.log(`5.First Character: ${firstChar}, Last Character: ${remove.charAt(remove.length-1)}`);

     var count=remove.split(" ");
    console.log("6. ", count.length);

    var find=str.search(`good`);
    console.log(`7. Index of "good" is: ${find}`);

    var sub=str.substring(22);
    var slices= str.slice(22);
  console.log(`8. Substring: ${sub}, Slice: ${slices} `);

  var include=str.includes("up");
  console.log(`9. String ends with "up": ${include}`);

  var includ=remove.includes("Hey");
  console.log(`10. String start with "Hey": ${includ}`);


}
stringHandsOn();