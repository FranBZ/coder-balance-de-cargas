import { logger } from '../config/logger.js'

export const failRoute = (req, res) => {
    logger.warn(`Ruta no encontrada`)
    res.status(404).render('error')
}