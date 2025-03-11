// Exercice 2 : Créer un émetteur personnalisé
// Crée une classe personnalisée appelée MyEmitter qui hérite de EventEmitter.
// Ajoute une méthode appelée triggerEvent qui déclenche un événement customEvent.
// Écoute l'événement customEvent et affiche un message lorsqu'il est déclenché.
// Utilise la méthode triggerEvent pour déclencher l'événement.
const EventEmitter = require("node:events")


class MyEmitter extends EventEmitter{
  constructor(){
    super()
  }

  triggerEvent(){
    this.emit("customEvent")
  }
}

const emitter = new MyEmitter()
emitter.on("customEvent", ()=> {
  console.log("Event Called !")
})


emitter.triggerEvent()
emitter.triggerEvent()
emitter.triggerEvent()





