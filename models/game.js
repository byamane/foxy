import mongoose from "mongoose"

const Schema = mongoose.Schema

const gameSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  genre: {type: String, required: true},
  esrbRating: {type: String, required: true},
  releaseYear: {type: Number, min: 1958, max: 2022, required: true},
  coverImage: {type: String, required: true},
  addedBy: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [{type: Schema.Types.ObjectId, ref: "Reviews" }],
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}