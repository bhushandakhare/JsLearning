console.log(`=====================================================`);

var arrayNumber = [11, 3, 4, 11, 4, 7, 3];
arrayNumber = [...new Set(arrayNumber)];
console.log(`Given the Array :=> [11, 3, 4, 11, 4, 7, 3]`);
console.log(`Remove The Duplicate Array :-> ${arrayNumber}`);



console.log(`=====================================================s`);

let str = "How are you mate";

str=str.split(" ");
let newString="";
for (const element of str) {
   
   for (const key in element) {

      const char =element[key];
      if(key==0 || key==element.length-1){
         
         newString=newString+char.toUpperCase();
      }
      else{
         newString=newString+char;
      }
   }
   newString+=" ";
}
console.log(`Given This String :=> "How are you mate"`);
console.log(`Expected Output :=>  ${newString}`);