import { Router } from 'express'
import { failRoute } from '../controllers/failRoute.controller.js'

const routerFail = Router()

// Randoms
routerInfo.get('/', failRoute)

export default routerFail