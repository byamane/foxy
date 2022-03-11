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
  .populate("reviews.addedBy")
  .then(game => {
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

function edit(req, res) {
  Game.findById(req.params.id)
  .then(game => {
    res.render("games/edit", {
      game,
      title: "Edit Game"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/games")
  })
}

function update(req, res) {
  Game.findById(req.params.id)
  .then(game => {
    if (game.addedBy.equals(req.user.profile._id)) {
      game.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/games/${req.params.id}`)
      })
    } else {
      throw new Error("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/games")
  })
}

function deleteGame(req, res){
  Game.findById(req.params.id)
  .then(game => {
    if (game.addedBy.equals(req.user.profile._id)) {
      game.delete()
      .then(() => {
        res.redirect("/games")
      })
    } else {
      throw new Error ("NOT AUTHORIZED")
    }
  })
  .catch(err => {
    console.log("the error:", err)
    res.redirect("/games")
  })
}

function newReview(req, res){
  Game.findById(req.params.id)
  .then(game => {
    res.render(`games/reviews`, {
      title: "Add Review",
      game
    })
  })
}

function createReview(req, res){
  Game.findById(req.params.id) 
  .then(game => {
    req.body.addedBy = req.user.profile._id
    game.reviews.push(req.body)
    game.save(function(err) {
      res.redirect(`/games/${game._id}`)
    })
  })
}

function deleteReview(req, res){
  Game.findById(req.params.id, (error, game) => {
    game.reviews.id(req.params.rid).remove()
    game.save(err => {
      res.redirect(`/games/${req.params.id}`)
    })
  })
}

export {
  index,
  newGame as new,
  create,
  show,
  edit,
  update,
  deleteGame as delete,
  newReview,
  createReview,
  deleteReview,
}