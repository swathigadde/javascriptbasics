let colours =  ['red','yellow','blue']; // print array elemnts
console.log(colours[1]); //particular elemnt in an array using indexing
for(let i = 0; i<colours.length; i++)// printing elements in the array using the length of the arrays

    {
        console.log(colours[i])
    }

for(let color of colours) // print array elemnts using looping

{
    console.log(color);
}
let empty = new Array(5); //empty array
let ele = new Array(1,2,3) //elements in the array
console.log(empty.length);// length of the array
console.log(ele.length);

colours.push("black");
console.log(colours);
colours.pop();

console.log(colours);
colours.unshift("white");
console.log(colours);
colours.unshift("Pink");
console.log(colours);