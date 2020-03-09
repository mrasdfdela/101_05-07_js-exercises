function validNums(arr) {
    returnValue = true

    arr.forEach( (el) => {
        if ( arr.length != 2 || 
            typeof el !== 'number' ||
            el < 0 ) {
            returnValue = false
        }
    })

    return returnValue
}

const sumAll = function(...arr) {
    if ( validNums(arr) == true) {
        min = Math.min(...arr)
        max = Math.max(...arr)
        sum = 0
    
        for (i = min; i <= max; i++) {
                sum += i
            }
        return sum
    } else {
        return "ERROR"
    }
}

module.exports = sumAll