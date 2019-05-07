import { router } from './routes/routes';
import { SERVER_PORT } from './global/enviroment';
import Server from './class/server';
import bodyParser from "body-parser"
import cors from 'cors'

const server = new Server();

// body parser
server.app.use(bodyParser.urlencoded({ extended: true }))
server.app.use(bodyParser.json())

// cors
server.app.use(cors({ origin: true, credentials: true }))
// rutas dde servicios
server.app.use('/', router)

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`)
})