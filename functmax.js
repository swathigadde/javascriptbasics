function findmax1(arr1,arr2){
    return{
            
        math1:Math.max(...arr1),
        math2 : Math.max(...arr2)
    };
  

}
let x = [10,30,40,42];
let y = [12,15,34,50];
console.log(findmax1(x,y));