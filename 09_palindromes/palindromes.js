const palindromes = function (str) {
    let strLower = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    console.log(strLower);
    let strSplit = strLower.split("");
    console.log(strSplit);
    let strReverseSplit = strSplit.reverse();
    console.log(strReverseSplit);
    let strReverse = strReverseSplit.join("");
    console.log(strReverse);
    if (strLower == strReverse) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
