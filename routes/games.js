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
// GET - localhost:3000/reviews
router.get('/:id/reviews', isLoggedIn, gamesCtrl.newReview)
// GET - localhost:3000/reviews
router.get('/:id', isLoggedIn, gamesCtrl.editReview)
 
// POST - localhost:3000/games
router.post('/', isLoggedIn, gamesCtrl.create)
// POST - localhost:3000/games/:id
router.post('/:id', isLoggedIn, gamesCtrl.createReview)

// PUT - localhost:3000/games/:id
router.put('/:id', isLoggedIn, gamesCtrl.update)

// DELETE - localhost:3000/games
router.delete('/:id', isLoggedIn, gamesCtrl.delete)
// DELETE - localhost:3000/games/:id/reviews/:rid
router.delete('/:id/reviews/:rid', isLoggedIn, gamesCtrl.deleteReview)


export {
  router
}