/*
 * Basic JS funktsioonide n2ited
 */

function findAnIndex(array, element) {
    return array.indexOf(element)
}

// tavaline funktsioon
function addNumbers(num1, num2) {
    return num1 + num2
}

// arrow function
const addArrow = (num1, num2) => {
    return num1 + num2
}

// arrow function lyhendatud
const addArrowShort = (num1, num2) => num1 + num2

// nested function
function addNested(a) {
    return function addSecond(b) {
        return a + b
    }
}

// nested function lyhendatud
function addNested2(a) {
    return (b) => a + b
}

// nested function veel lyhendatud (pull v2rk)
const addNested3 = (a) => (b) => a + b

// string literals
const nameString = (name) => `Name is ${name}`

// map, filter, reduce?
const numberArray = [1, 3, 5, 2, 7]

// map kutsub v2lja callbacki iga array elemendi jaoks
// asi mis callbackist returnitakse lisatakse uude arraysse
// .map(() => {})

// liita igale elemendile 5
const newAddedArray = numberArray.map((elem) => elem + 5)

// filter kutsub v2lja callbacki iga array elemendi jaoks
// callback tagastab booli, mis m22rab 2ra kas lisada see element uude arraysse v6i mitte


const filteredArray = numberArray.filter((elem) => elem == 3)


/*
 * Kasutused
 */

const numbrid = [0, 3, 13, 12, 8, 7]
console.log(findAnIndex(numbrid, 13))
//console.log(addArrowShort(3, 5))
console.log(addNested3(3)(5))
console.log(nameString("Sten"))
console.log(filteredArray)