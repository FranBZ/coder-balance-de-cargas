import { Router } from 'express'
import { ramdomController } from '../controllers/random.controller.js'
import { error404 } from '../utils/errorRuta.js'

const routerRandoms = Router()

// Randoms
routerRandoms.get('/randoms:cant?', ramdomController)
routerRandoms.use(error404)

export default routerRandoms