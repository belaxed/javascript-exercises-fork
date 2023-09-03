const sumAll = function(int1, int2) {
    let sum = 0;
    if (int1 > 0 && int2 > 0) {
        if (typeof int1 == "number" && typeof int2 == "number") {
            if (int1 < int2) {
                for (i = int1; i <= int2; i++) {
                    sum += i;
                }
            }
            else if (int1 > int2) {
                for (i = int2; i <= int1; i++) {
                    sum += i;
                }
            }
        }
        else {
            return "ERROR";
        }
    }
    else {
        return "ERROR";
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
