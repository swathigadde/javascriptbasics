let str1="Hello";
let str2="World";
let str3='Hello World'.toUpperCase();
console.log(str3.length);
console.log(str1[1]);
str3[3]="G"
console.log(str3);
let msg=" hi ";
console.log(msg.trim());
console.log(str3.slice(0,4));
console.log(str3);
console.log(str3.replace('HELLO',"HI"));
console.log(str3);
console.log(str3.split(" "));
console.log(str3.concat(" HI"));
console.log(str3.includes("HELLO"));
console.log(str3.startsWith("HEL"));
console.log(str3.endsWith("HELLO"));
console.log(str3.indexOf("H"));
console.log(str3.lastIndexOf("L"));
if(str1==str2){
    console.log("String is similar")
}
else{
    console.log("String is not similar")
}
let s = "JS";
for(let ch of s)
    console.log(ch);