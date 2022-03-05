import { Router } from 'express'
import * as gamesCtrl from "../controllers/games.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/games
router.get('/', isLoggedIn, gamesCtrl.index)
// GET - localhost:3000/games/new
router.get('/new', isLoggedIn, gamesCtrl.new)

export {
  router
}