const { Player, Tournament } = require("../model/index")


const index = (req, res) => {
  Player.findAll()
    .then((players) => res.json(players))
    .catch((err) => res.status(500).json(err))
}
const show = (req, res) => {
  const id = parseInt(req.params.id)

  Player.findByPk(id)
    .then((player) => res.json(player))
    .catch((err) => res.status(500).json(err))
}
const store = (req, res) => {
  const { name, surname, picture_url, birth_date } = req.body

  Player.create({ name, surname, picture_url, birth_date })
    .then((player) => res.status(201).json(player))
    .catch((err) => res.status(500).json(err))
}
const update = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, surname, picture_url, birth_date } = req.body

  Player.update({ name, surname, picture_url, birth_date }, { where: { id } })
    .then(player => res.json(player))
    .catch(err => res.status(500).json(err))

}

const addAvatar = async (req, res) => {
  const id = parseInt(req.params.id)

  if (!req.files?.image) return res.status(400).json({ message: "File not provided !" })

  const player = await Player.findByPk(id)
  if (!player) return res.status(400).json({ message: "User not found " })


  const baseUrl = `./public/images/`
  const timeStamp = Date.now()
  const filename = req.files.image.name

  const path = `${baseUrl}${timeStamp}_${filename}`

  req.files.image.mv(path, async (err) => {
    if (err) return res.status(500).json(err)
    player.picture_url = timeStamp + '_' + filename
    await player.save()

    res.json(player)
  })
}


const destroy = async (req, res) => {
  const id = parseInt(req.params.id)

  const player = await Player.findByPk(id)
  if (player === null) return res.status(404).json({ message: "Player not found !" })

  await player.destroy()

  res.json({ message: "Player deleted !" })
}


const getPlayerTournaments = async (req, res) => {
  const id = parseInt(req.params.id)
  const player = await Player.findByPk(id, { include: [Tournament] })

  if (!player) return res.status(400).json({ message: "Player not found !" })

  res.json(player)
}


module.exports = { index, show, store, update, destroy, getPlayerTournaments, addAvatar }