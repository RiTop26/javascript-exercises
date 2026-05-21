const removeFromArray = function(arr, ...theArrs) {
    let newArray = arr.filter((word) => !theArrs.includes(word))
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
