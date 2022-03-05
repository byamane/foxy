import { Review } from "../models/review.js"
import { Game } from "../models/game.js"

function newReview(req, res){
  res.render('reviews/new', {
    title: "Add Review"
  })
  .catch(err => {
    console.log(err)
    res.redirect("/games/:id")
  })
}


export {
  newReview as new,
}