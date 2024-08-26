function myEach(collection, callback){
    let newCollection = [...collection] // declare new variable to hold new array using spread operator
    console.log(Array.isArray(collection) === false)
    if (Array.isArray(collection) === false) { // if the element is NOT an array, turn it into an array using the Object.values method
        newCollection = Object.values(collection)
    }
    newCollection.forEach(item => {
        callback(item)
    })
    // }
    return collection
}

function myMap(collection, callback){
    let newCollection = [...collection]
    let newArray = []
    if (Array.isArray(collection) === false) {
        newCollection = Object.values(collection)
    }
    newCollection.forEach(item => {
        newArray.push(callback(item))
    })
    return newArray
}

function myReduce(collection, callback, acc){
    let newCollection = [...collection] // creating copied array to work with
    if (Array.isArray(collection) === false){
        newCollection = Object.values(collection)
    }
    if (!acc) { // (acc === null) could also work here
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i]) 
    }
    return acc
}

function myFind(collection, predicate){
    let newCollection = [...collection]
    if (Array.isArray(collection) === false){
        newCollection = Object.values(collection)
    }
    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i]))
        return newCollection[i]
    }
    return undefined
}

function myFilter(collection, predicate){
    let newCollection = [...collection]
    if (Array.isArray(collection) === false){
        newCollection = Object.values(collection)
    }
    let newArr = []
    for (let i = 0; i < newCollection.length; i++){
        if (predicate(newCollection[i]) === true){
            newArr.push(newCollection[i])
        }
    }
    // console.log(newCollection)
    // console.log(newArr)
    return newArr
}

function mySize(collection){
    let newCollection = [...collection]
    if (Array.isArray(collection) === false){
        newCollection = Object.values(collection)
    }
    return newCollection.length
}

function myFirst(array, n){
    // console.log(n)
    if (n === undefined) {
        return array[0]
    }
    return array.slice(0, n)
}

function myLast(array, n){
    console.log(array)
    if (n === undefined) {
        return array[array.length - 1]
    }
    return array.slice(array.length - n, array.length)
}