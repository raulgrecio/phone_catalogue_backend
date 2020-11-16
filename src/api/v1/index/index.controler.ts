import { Request, Response } from 'express'

export default class IndexController {
  public getIndex(req: Request, res: Response): void {
    res.status(200).json('Api: /api/v1/phones')
  }
}
