const reverseString = function(str) {
    newStr = []
    
    str.split("").forEach( (s) => {
        newStr.unshift(s)    
    })

    return newStr.join("")
}

module.exports = reverseString
