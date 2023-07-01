const reverseString = function(str) {
    myStr = ""
    if (str !== "") {
        for (let i = str.length-1; i >= 0; i--) {
            myStr += str[i]
        }
    }
    

    return myStr;
};

// Do not edit below this line
module.exports = reverseString;
