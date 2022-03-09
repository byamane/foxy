import { Router } from "express"
import * as profilesCtrl from "../controllers/profiles.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

// POST - localhost3000:profiles/:id
router.post("/:id", isLoggedIn, profilesCtrl.addFavorite)

export {
  router
}