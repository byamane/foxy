import { Profile } from "../models/profile.js"
import { Game } from "../models/game.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Users"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate("favorites")
  .then(profile => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      Game.find({_id: {$nin: profile.favorites}}, function(err, games) {
        res.render('profiles/show', {
          title: `${profile.name}'s profile`,
          profile,
          isSelf,
          games
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

// function show(req, res) {
//   Profile.findById(req.params.id)
//   .then(profile => {
//     Profile.findById(req.user.profile._id)
//     .then(self => {
//       const isSelf = self._id.equals(profile._id)
//       res.render("profiles/show", {
//         title: `${profile.name}'s profile`,
//         profile,
//         isSelf
//       })
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect("/")
//   })
// }

export {
  index,
  show,
}