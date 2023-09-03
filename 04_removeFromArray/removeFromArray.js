const removeFromArray = function(array, ...removals) {
    /*
    for (i = 0; i < args.length; i++) {
        if (indexOf(...args) !== -1) {
            array.splice(array.indexOf(arguments[i + 1]),1);
        }
        else {
            continue;
        }
        
    }
    
    return array;
    */

    for (let i = 0; i < removals.length; i++) {
        if (array.includes(removals[i])) {
            array.splice(array.indexOf(removals[i]), 1);
        }
        else {
            continue;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
