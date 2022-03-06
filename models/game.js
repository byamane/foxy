import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema ({
  rating: {
    type: Number, 
    min: 1, 
    max: 10, 
    required: true
  },
  content: {type: String, required: true},
  addedBy: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true,
})

const gameSchema = new Schema ({
  name: {type: String, required: true, unique: true},
  genre: {type: String, required: true},
  esrbRating: {type: String, required: true},
  releaseYear: {type: Number, min: 1958, max: 2022, required: true},
  coverImage: {type: String, required: true},
  addedBy: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema],
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}