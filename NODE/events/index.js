const EventEmitter = require("node:events")

const em = new EventEmitter()

em.on("hello-world", (name) => {
  console.log("Hello :" + name)
})

// em.emit("hello-world", "Toto")


// Processus 1
em.on("ping", () => {
  console.log("Ping")
  em.emit("pong")
})

// Processus 2
em.on("pong", () => {
  console.log("pong")
})

em.emit("ping")




class MaClass extends EventEmitter {

  constructor() {
    super()
    this.count = 0
  }

  increment() {
    this.count ++
    this.emit("increment", this.count)
  }

}


const monObjet = new MaClass()

monObjet.on("increment", (count) => {
  console.log("Increment", count)
})

monObjet.increment()
monObjet.increment()
monObjet.increment()