const reverseString = function(string) {
    if (typeof string === "string") {
        const splitArray = string.split("");
        const reversedArray = splitArray.reverse();
        let reversedString = reversedArray.join("")

        return reversedString;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = reverseString;
