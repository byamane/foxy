import { Game } from "../models/game.js"

function index(req, res) {
  Game.find({})
  .then(games => {
    res.render('games/index', {
      games,
      title: "All Games"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/games")
  })
}

function newGame(req, res) {
  res.render('games/new', {
    title: "Add Game"
  })
  .catch(err => {
    console.log(err)
    res.redirect("/games")
  })
}

function create(req, res){
  req.body.addedBy = req.user.profile._id
  const game = new Game(req.body)
  game.save(function(err) {
    if (err) return res.redirect('/games/new')
    res.redirect('/games')
  })
}

function show(req, res){
  Game.findById(req.params.id)
  .populate("addedBy")
  .then(game => {
    console.log(game)
    res.render('games/show', {
      game,
      title: `${game.name}`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/games")
  })
}



export {
  index,
  newGame as new,
  create,
  show,

}