const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR";
    if (year < 0) return "ERROR";

    let isDivisibleByFour;
    let isDivisibleByFourHundred;
    let isDivisibleByOneHundred;

    if (year % 4 == 0) {
        isDivisibleByFour = true;
    }
    if (year % 400 == 0) {
        isDivisibleByFourHundred = true;
    }
    if (year % 100 == 0) {
        isDivisibleByOneHundred = true;
    }

    if (isDivisibleByFourHundred) {
        return true;
    }
    else {
        if (isDivisibleByOneHundred) {
            return false;
        }
        else {
            if (isDivisibleByFour) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    
};

// Do not edit below this line
module.exports = leapYears;
