function check(number) {
    if (number % 2 === 0) {
        return `${number} is Even`;
      
    } else {
        return `${number} is odd number`;
       
    }
}
console.log(check(10));
console.log(check(15));
console.log(check(13));