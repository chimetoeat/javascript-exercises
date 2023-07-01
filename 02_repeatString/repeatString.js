const repeatString = function(str, num) {
    myStr = ""
    if (num > 0 && str !== "") {
        for (let i = 0; i < num; i++) {
            myStr += str;
        }
    } else if (num < 0  && str !== "") {
        myStr = "ERROR";
    }
    


    return myStr;
};

// Do not edit below this line
module.exports = repeatString;
