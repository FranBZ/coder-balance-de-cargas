import { Router } from 'express'
import { logout, signin, signup, auth, sessionController } from '../controllers/user.controller.js'
import { error404 } from '../utils/errorRuta.js'

/*+++++++++++
+ ENRUTADOR +
++++++++++++*/

const routerSession = Router()

routerSession.get('/productos-test', auth, sessionController)

// Registro
routerSession.get('/error-registro', (req, res) => res.render('errorRegistro'))
routerSession.get('/registro', (req, res) => res.render('registro'))
routerSession.post('/registro', signup)

// Login
routerSession.get('/error-login', (req, res) =>  res.render('errorLogin'))
routerSession.get('/login', (req, res) => res.render('login'))
routerSession.post('/login', signin)

// Logout
routerSession.get('/logout', logout)

// Error
routerSession.use(error404)

export default routerSession