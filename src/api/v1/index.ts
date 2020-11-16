import { Router } from 'express'
import index from './index/index.route'
import phones from './phone/phone.route'

const router: Router = Router()

router.use('/', index)
router.use('/api/v1/phones', phones)

export default router
