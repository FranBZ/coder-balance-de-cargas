/*++++++++++++++++++
+ INICIO DE LA APP +
+++++++++++++++++++*/

import { app, http } from './app.js'
import { logger } from './config/logger.js'

const connectedServer = http.listen(app.get('port'), () => {
    logger.info("Servidor conectado, escuchando en", app.get('port'))
})

connectedServer.on("error", error => console.log(error))