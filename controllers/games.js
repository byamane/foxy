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



export {
  index,
  newGame as new,

  
}