function findmin1(arr2,arr3,arr4){
    return{
obj1:Math.min(...arr2),
obj2:Math.min(...arr3),
obj3:Math.min(...arr4),
    };
   
}
let x=[22,34,11,6];
let y=[3,56,74];
let z=[26,1,67];
console.log(findmin1(x,y,z));
