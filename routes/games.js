import { Router } from 'express'
import * as gamesCtrl from "../controllers/games.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/games
router.get('/', gamesCtrl.index)
// GET - localhost:3000/games/new
router.get('/new', isLoggedIn, gamesCtrl.new)
// GET - localhost:3000/games/:id
router.get('/:id', isLoggedIn, gamesCtrl.show)
// GET - localhost:3000/games/:id/edit
router.get('/:id/edit', isLoggedIn, gamesCtrl.edit)



// POST - localhost:3000/games
router.post('/', isLoggedIn, gamesCtrl.create)

// PUT - localhost:3000/games/:id
router.put("/:id", isLoggedIn, gamesCtrl.update)


export {
  router
}