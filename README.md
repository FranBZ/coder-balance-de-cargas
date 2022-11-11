# Servidor - Balance de cargas

## Consigna: 
Tomando con base el proyecto que vamos realizando, agregar un parámetro más en
la ruta de comando que permita ejecutar al servidor en modo fork o cluster. Dicho
parámetro será 'FORK' en el primer caso y 'CLUSTER' en el segundo, y de no
pasarlo, el servidor iniciará en modo fork.
- Agregar en la vista info, el número de procesadores presentes en el servidor.
- Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de
procesos tomados por node.
- Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su
correcta operación. Listar los procesos por Forever y por sistema operativo.
- Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando PM2 en sus
modos modo fork y cluster. Listar los procesos por PM2 y por sistema operativo.
- Tanto en Forever como en PM2 permitir el modo escucha, para que la actualización del
código del servidor se vea reflejado inmediatamente en todos los procesos.
- Hacer pruebas de finalización de procesos fork y cluster en los casos que corresponda.

Configurar Nginx para balancear cargas de nuestro servidor de la siguiente manera:
Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. 
- El cluster será creado desde node utilizando el módulo nativo cluster.
- El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080.
- Verificar que todo funcione correctamente.
- Luego, modificar la configuración para que todas las consultas a /api/randoms sean redirigidas a
un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4
instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

## Aspectos a incluir en el entregable:
- Incluir el archivo de configuración de nginx junto con el proyecto.
- Incluir también un pequeño documento en donde se detallen los comandos que deben
ejecutarse por línea de comandos y los argumentos que deben enviarse para levantar todas las
instancias de servidores de modo que soporten la configuración detallada en los puntos
anteriores.
Ejemplo:
● pm2 start ./miservidor.js -- --port=8080 --modo=fork
● pm2 start ./miservidor.js -- --port=8081 --modo=cluster
● pm2 start ./miservidor.js -- --port=8082 --modo=fork
● ...

<sup>Formato de entrega: link a un repositorio en Github con los tres proyectos en
carpetas separadas. No incluir los node_modules.</sup>

# Como ejecutar el proyecto
### En tu pc
- Antes que nada debes tener instalado en tu pc node.js
- Debes clonar el repositorio
- Abrir una terminal y en ella dirigirte a la carpeta con el nombre del proyecto
- Ejecutar el comando ``` npm install ```
- Deves configurar un archivo ``` .env ``` con los siguientes datos
    ```
    MONGO_USER = "< usuario de mongo atlas >"
    MONGO_PASS = "< contraseña de mongo atlas> "
    MONGO_ATLAS_ENDPOINT = "< @cluster0.aaa111.mongodb.net/db >"
    ```
- Una vez finalizado el punto anterior, ejecutar el comando ``` (chequear scripts disponibles en package.json) ```
- Luego dirigite en tu navegador de preferencia a [esta ruta](http://localhost:8080/api/productos-test) 
para testear la app