import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'

import appVersion from './api/v1/index'

class Server {
  app: express.Express

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  private config(): void {
    // settings

    // middlewares
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(cors())
  }

  private routes(): void {
    // const router: express.Router = express.Router()

    this.app.use('/', appVersion)
  }

  public start({ port }: { port: string }): void {
    this.app.listen(port, () => {
      console.log(`Server is listening on ${port}`)
    })
  }
}

export { Server }
