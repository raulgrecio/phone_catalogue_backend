import { Router } from 'express'
import Controller from './phone.controller'

const phone: Router = Router()
const controller = new Controller()

// Send info api

// Retrieve all Phones
phone.get('/', controller.findAll)

// Retrieve a Specific Phone
phone.get('/:id', controller.findOne)

// Create a Phone
phone.post('/', controller.create)

// Update a Phone with Id
phone.put('/:id', controller.update)

// Update a feature Phone with Id
//TODO: phone.patch('/:id', controller.patch)

// Delete a Phone with Id
phone.delete('/:id', controller.remove)

export default phone
