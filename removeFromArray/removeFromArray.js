const removeFromArray = function(arr, ...rmArr) {
    newArr = []
    
    arr.forEach( (el)=> {
        rmArr.includes(el) ? newArr : newArr.push(el)
    })

    return newArr
}


module.exports = removeFromArray
