import mongoose from "mongoose"

const Schema = mongoose.Schema

const gameSchema = new Schema ({
  name: {type: String, required: true},
  genre: {type: String, required: true},
  esrbRating: {type: String, required: true},
  releaseYear: {type: Number, required: true},
  coverImage: {type: String, required: true},
  // addedBy: {type: Schema.Types.ObjectId, ref: "Profile"},
  // allReviews: {type: Schema.Types.ObjectId, ref: "All Reviews"}
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}