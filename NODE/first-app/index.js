// $npm init
// $npm install express
// $npm run dev

const express = require("express")

const app = express()


app.listen(3000, () => {
  console.log("App Running on port 3000")
})


// Exercice 1 : Route simple avec retour texte
// Crée une route GET à l'adresse /hello qui retourne le texte suivant :
// "Bonjour, bienvenue dans notre API!"

app.get("/hello", (req, res) => {
  res.send("Bonjour, bienvenue dans notre API!")
})


// Exercice 2 : Route avec path parameters
// Crée une route GET à l'adresse /user/:name qui retourne un message personnalisé :
// "Bonjour, [name]!"
// Remplace [name] par la valeur du paramètre passé dans l'URL.

app.get("/user/:name", (req, res) => {
  res.send(`Bonjour, ${req.params.name}`)
})


// Exercice 3 : Route avec query parameters
// Crée une route GET à l'adresse /search qui accepte un paramètre de requête query.
// Retourne un message sous forme de texte :
// "Vous avez recherché : [query]"
// Si aucun paramètre query n'est fourni, retourne :
// "Aucune recherche effectuée."


app.get("/search", (req, res) => {
  const { query } = req.query

  if (query) {
    res.send("Vous avez recherché : " + query)
  } else {
    res.send("Aucune recherche effectuée.")
  }
})


// Exercice 4 : Route avec plusieurs path parameters
// Crée une route GET à l'adresse /product/:category/:id qui retourne un message détaillant la catégorie et l'identifiant du produit :
// "Produit ID [id] dans la catégorie [category]"
// Remplace [id] et [category] par les valeurs des paramètres d'URL.

app.get("/product/:category/:id", (req, res) => {
  res.send(`Produit ID [${req.params.id}] dans la catégorie [${req.params.category}]`)
})



// Exercice 5 : Retourner un objet JSON simple
// Crée une route GET à l'adresse /api/info qui retourne un objet JSON :

app.get("/api/info", (req, res) => {
  res.json({message: "Bienvenue sur notre API !", status: "Success"})
})


// Exercice 6 : Route avec HTML en retour
// Crée une route GET à l'adresse /welcome qui retourne une réponse HTML :

app.get("/welcome", (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <p>Fonctionalités</p>
    `)
})


// Exercice 7 : Combinaison de path et query parameters
// Crée une route GET à l'adresse /profile/:username qui accepte un paramètre de requête age.
// Retourne un message personnalisé sous la forme :
// "Profil de [username], âge : [age]"
// Si age n'est pas fourni, retourne :
// "Profil de [username], âge non spécifié."

app.get("/profile/:username", (req, res) => {
  const { age } = req.query
  const { username } = req.params

  if (age) {
    res.send(`Profil de [${username}], âge : [${age}]`)
  } else {
    res.send(`Profil de [${username}], âge non spécifié`)
  }
})


// Exercice 8 : Filtrage avec query parameters
// Crée une route GET à l'adresse /api/users qui accepte un paramètre de requête name.
// Créer une const Users avec 10 utilisateurs dans un tableau 
// Si name est fourni, retourne l'utilisateur dont le name correspond.
// Si aucun utilisateur ne correspond, retourne un message d’erreur JSON

const Users = [
  { id: 1, name: "Jean", age: 25 },
  { id: 2, name: "Marie", age: 30 },
  { id: 3, name: "Pierre", age: 35 },
  { id: 4, name: "Sophie", age: 28 },
  { id: 5, name: "Lucas", age: 32 },
  { id: 6, name: "Emma", age: 27 },
  { id: 7, name: "Thomas", age: 40 },
  { id: 8, name: "Julie", age: 29 },
  { id: 9, name: "Nicolas", age: 33 },
  { id: 10, name: "Sarah", age: 31 }
]


const logger = (req, res, next) => {
  console.log("Middleware")
  next()
}

app.get("/api/users", logger ,  (req, res) => {
  const {name} = req.query


  const user = Users.find( (u) => u.name === name)

  if (user) {
    res.json(user)
  } else {
    res.status(404).json({message : "User not found !"})
  }
})



