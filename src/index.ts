import { Server } from './server'
import CONFIG from './config/config'
import { disconnect } from './config/db'
import { restoreDatabase } from './config/fixtures' //reset the bd

const PORT = CONFIG.PORT
const server = new Server()

restoreDatabase().then(() => {
  server.start({ port: PORT })
  server.app.on('connection', (connection) => connection.on('close', disconnect))
  process.on('SIGTERM', shutDown)
  process.on('SIGINT', shutDown)

  function shutDown() {
    console.log('Received kill signal')
    disconnect()
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
  }
})
