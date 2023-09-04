const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let num1 = 0;
    let num2 = 1;
   
    for (i = 1; i < num; i++) {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
