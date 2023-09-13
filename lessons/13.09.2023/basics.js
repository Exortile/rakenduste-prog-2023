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
const newAddedArray = numberArray.map((elem, index, array) => {
    // {} on object (nagu hashmap), key value paarid
    console.log({
        elem, // andes variable'i, moodustab automaatselt "elem": elem (tema v22rtus)
        newElement: elem + 5, // tavaline key: value, newElement l2heb automaatselt stringiks
        "index": index, // k6ige tavalisem key: value
        array: array // saab ka nii pikemalt
    })

    return elem + 5
})

// filter kutsub v2lja callbacki iga array elemendi jaoks
// callback tagastab booli, mis m22rab 2ra kas lisada see element uude arraysse v6i mitte


// uus array kus on ainult elemendid mis on v2iksemad kui 4
const filteredArray = numberArray.filter((elem, index, array) => elem < 4)


const names = ["Juku", "Mari", "Jaan", "Anni"]

const reverseString = str => str.split("").reverse().join("")

// kui tahad tagastada arrow funktsiooniga objecti, pane object sulgudesse
// muidu arvab et sa tahad funktsiooni keha kirjutada
const data = names.map(name => ({
    name,
    age: name.length + 20,
    email: `${name.toLowerCase()}@company.com`,
    address: `${name} Street 55`,
    username: reverseString(name)
}))

// tahan lisada uue key value pair

// "..." on nii nimetatud spread syntax
// ...data[0] v6tab k6ik selle objecti key value ja copyb ymber
const newJuku = {
    ...data[0],
    height: 175
}

// kui soov yle kirjutada vanas objektis
const evenNewerJuku = {
    ...data[0],
    age: 99
}


/*
 * Kasutused
 */

const numbrid = [0, 3, 13, 12, 8, 7]
console.log(findAnIndex(numbrid, 13))
//console.log(addArrowShort(3, 5))
console.log(addNested3(3)(5))
console.log(nameString("Sten"))
console.log({ filteredArray, evenNewerJuku })