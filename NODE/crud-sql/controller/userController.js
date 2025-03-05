const hello = (req, res) => {
  res.send("Hello world !")
}

const goodbye = (req, res) => {
  res.send("Bye !")
}




module.exports = { hello, goodbye }