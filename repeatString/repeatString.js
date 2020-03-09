const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        newStr = ""
        for (i=0; i<num; i++) {
            newStr += str
        }
        return newStr
    }
}

module.exports = repeatString