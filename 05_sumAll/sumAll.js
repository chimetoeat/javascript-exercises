const sumAll = function(num1, num2) {
    let min = Math.min(num1,num2);
    let max = Math.max(num1,num2);

    let sum = 0;

    if (max > 0 && typeof num1 === 'number' && min > 0 && typeof num2 === 'number') {
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    } else {
        return "ERROR"
    }
        

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
