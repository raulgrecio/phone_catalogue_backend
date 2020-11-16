import { Express } from 'express'
import request from 'supertest'

import { disconnect } from '../config/db'
import { restoreDatabase } from '../config/fixtures'
import { Server } from '../server'

const BASE_PATH = '/api/v1/phones'
const PAGE_SIZE = 2

describe('Phone API', () => {
  let app: Express

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.console = {
      log: jest.fn(), // console.log are ignored in tests
      error: console.error,
      warn: console.warn,
      info: console.info,
      debug: console.debug
    }
    app = new Server().app
  })

  afterAll(disconnect)

  beforeEach(async () => await restoreDatabase(true))

  describe('GET', () => {
    it('/ should return the API path', async () => {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
      expect(response.body).toEqual(`Api: ${BASE_PATH}`)
    })

    it(`${BASE_PATH} should return all results`, async () => {
      const response = await request(app).get(`${BASE_PATH}`)
      expect(response.status).toBe(200)
      expect(response.body.data.results.length).toBe(5)
    })

    it(`${BASE_PATH} should return a paginated result`, async () => {
      const response = await request(app).get(`${BASE_PATH}`).query({ page: 2 })
      expect(response.status).toBe(200)
      const data = response.body.data.results
      expect(data.length).toBe(PAGE_SIZE)
      expect(data[0].model).toEqual('Samsung Galaxy S7')
      expect(data[1].model).toEqual('Samsung Galaxy A51 5G')
    })

    it(`${BASE_PATH} should return a specific phone`, async () => {
      const id = (await request(app).get(`${BASE_PATH}`).query({ page: 1 })).body.data.results[1]
        ._id
      const response = await request(app).get(`${BASE_PATH}/${id}`)
      expect(response.status).toBe(200)
      expect(response.body.data.model).toEqual('Apple iPhone X 64GB')
    })
  })

  describe('POST', () => {
    it('/ should return 400 status with invalid data', async () => {
      const actionResponse = await request(app).post(`${BASE_PATH}`).send({ puf: 'paf' })
      expect(actionResponse.status).toBe(400)
    })

    it('/ should create a brand new phone record', async () => {
      const data = (await request(app).get(`${BASE_PATH}`).query({ page: 1 })).body.data.results[1]
      data.model = 'Iberian Bull Mx 256GB'
      const actionResponse = await request(app).post(`${BASE_PATH}`).send(data)
      expect(actionResponse.status).toBe(200)
      expect(actionResponse.body.data.model).toEqual('Iberian Bull Mx 256GB')
    })
  })

  describe('PUT', () => {
    it('/ should return 404 status with invalid id', async () => {
      const actionResponse = await request(app)
        .put(`${BASE_PATH}/5fa9c56d0d7bb34534861886`)
        .send({ puf: 'paf' })
      expect(actionResponse.status).toBe(404)
    })

    it('/ should modify an existing phone record', async () => {
      const data = (await request(app).get(`${BASE_PATH}`).query({ page: 1 })).body.data.results[1]
      data.model = 'Iberian Bull Mx 256GB'
      const actionResponse = await request(app).put(`${BASE_PATH}/${data._id}`).send(data)

      // const id = (await request(app).get(`${BASE_PATH}`).query({ page: 1 })).body.data[1]._id
      // const actionResponse = await request(app)
      //   .put(`${BASE_PATH}/${id}`)
      //   .send({ model: 'Iberian Bull Mx 128GB' })

      expect(actionResponse.status).toBe(200)
      const response = await request(app).get(`${BASE_PATH}/${data._id}`)
      expect(response.status).toBe(200)
      expect(response.body.data.model).toEqual('Iberian Bull Mx 256GB')
    })
  })

  describe('DELETE', () => {
    it('/ should delete and existing phone record', async () => {
      const id = (await request(app).get(`${BASE_PATH}`).query({ page: 2 })).body.data.results[1]
        ._id
      const actionResponse = await request(app).delete(`${BASE_PATH}/${id}`)
      expect(actionResponse.status).toBe(204)
      const response = await request(app).get(`${BASE_PATH}`).query({ page: 2 })
      expect(response.status).toBe(200)
      expect(response.body.data.results[1].model).toEqual('Xiaomi Mi 9 Lite 64GB+6GB RAM')
    })
  })
})
