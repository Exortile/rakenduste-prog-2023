let a = 1
let b = 2

// tavalisem muutuja vahetus
const c = a
a = b
b = c

// teist moodi muutuja vahetus
;[a, b] = [b, a]

console.log(a)
console.log(b)

// String to number
const actuallyANumber = "1"
console.log(parseInt(actuallyANumber))
console.log(+actuallyANumber)

// async/await
;(async () => {
  const myPromise = () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve("myPromise() resolved in 100ms")
      }, 100)
    )

  const myPromise2 = new Promise(resolve =>
    setTimeout(() => resolve("myPromise2 resolved in 200ms"), 200)
  )

  const asyncAwait = async () => {
    const myPromiseResponse = await myPromise()
    const myPromiseResponse2 = await myPromise2

    // saab all'iga paralleelselt oodata
    // aga yhe rejecti puhul rejectib k6ik
    // Promise.all([ ])

    return { myPromiseResponse, myPromiseResponse2 }
  }

  console.log(await asyncAwait())
})()

// arrayst value muutujasse
;(() => {
  const massiiv = [1, 2, 3, 4, 47]
  let a = massiiv[4]
  console.log(a)

  // array deconstruction
  const deconstruct = () => {
    const [, , , , a] = massiiv

    return a
  }

  const multiDeconstruct = () => {
    const [b, , d, , a] = massiiv

    return { b, d, a }
  }

  console.log(deconstruct())
  console.log(multiDeconstruct())
})()

// key kaudu value v6tmine
;(() => {
  const raimo = {
    name: "Raimo",
    school: "TLU",
    "dreams and etc": "jaatis"
  }

  console.log(raimo.name)
  console.log(raimo["name"])
  //console.log(raimo.dreams and etc)
  console.log(raimo["dreams and etc"])

  const myObject = {
    time: 1,
    place: 2,
    city: 3,
    something: 4
  }

  // deconstructimise viis
  const deconstruct = () => {
    const { city, place } = myObject

    // kui vaja teise muutuja nimega key'd
    //const { city: myCity } = myObject

    return { city, place }
  }

  console.log(deconstruct())
})()
