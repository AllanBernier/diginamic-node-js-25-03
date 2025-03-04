let a = 5;
// var b = 5;
const c = 5;



function testVar() {
  let x = 1;

  if (true) {
    let x = 2

    console.log(x)
  }

  console.log(x)

}

// testVar()



let number = 5;
let str = "lalal"
let char = 'c'
let bool = true

// Array 
let arr = [1, 2, 3, 4, 5]


let arrCopy = [...arr]

arr.push(55)


// const first = arr[1]
// const sec = arr[2]

const [first, sec] = arr

// console.log(arrCopy)

// Obj

let obj = { message: "value", code: 200 }

let objCopy = { ...obj, code: 201 }



const { message, code } = objCopy


obj.code = 500

// console.log(message)
// console.log(code)

// ternaire

let input = 5

// if (input > 10) {
//   console.log("True")
// } else if (input < 20) {
//   console.log("False")
// } else {
//   console.log("Else")
// }

// console.log( input > 10 ? "True" : ( input < 20 ) ?  "False" : "Else" )


// arrow function


function maFunction(input) {
  return input > 10
}

const myArrowFunc = () => input > 10


let notes = [10, 15, 6, 18, 17]


const newArr = notes.filter((note) => note >= 10)

notes.map((note) => note + 1)

let somme = 0
notes.forEach((note) => somme = somme + note)
const avg = somme / notes.length


const average = notes.reduce((acc, note) => { acc + note }, 0) / notes.length


// Chaining Operator


const user = { name: "Jhon", matieres: { math: { notes: [] } } }
const user2 = { name: "Jhon", matieres: { svt: { notes: [] } } }


// console.log(user2?.matieres?.math?.notes)
// console.log(user?.matieres?.math?.notes)


// concat
// (backtick)


let firstname = "Jhon"
let lastname = "Doe"

const fullname = firstname + " " + lastname
const concat = `${firstname} ${lastname}`

// console.log(fullname)


const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    return setTimeout(resolve, ms)
  })
} 


const asyncFunc = async () => {
  console.log("Start")
  await sleep(2000)
  console.log("End")
}


const syncFunc = () => {
  console.log("Start")
  sleep(2000)
  .then( () => {
    console.log("Resolved")
  } )
  .catch( () => {
    console.log("Reject")
  })
  console.log("End")
}



syncFunc()


