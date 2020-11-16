import { Router } from 'express'
import Controller from './index.controler'

const index: Router = Router()
const controller = new Controller()

// Send info api
index.get('/', controller.getIndex)

export default index
