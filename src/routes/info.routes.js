import { Router } from 'express'
import { infoController } from '../controllers/info.controller.js'
import compression from 'compression'
import { error404 } from '../utils/errorRuta.js'

const routerInfo = Router()

// Randoms
routerInfo.get('/', compression(), infoController)
routerInfo.use(error404)

export default routerInfo