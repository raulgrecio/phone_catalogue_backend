import { Request, Response } from 'express'

import Phone from './phone.model'

const PAGE_SIZE = 2

export default class PhonesController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const tryPage = req.query.page != null && !isNaN(Number(req.query.page))
      const pageQuery = tryPage ? (req.query.page as string) : '1'
      const page = parseInt(pageQuery)
      const skip = (page - 1) * PAGE_SIZE
      const limit = tryPage ? PAGE_SIZE : 0

      const results = await Phone.find({}).skip(skip).limit(limit)
      const totalResults = await Phone.count({})
      const totalPages = Math.ceil(totalResults / limit)

      if (!results) {
        return res.status(404).json({
          success: false,
          message: 'Phones not found',
          data: null
        })
      }

      res.status(200).json({
        success: true,
        data: {
          results,
          page: page,
          pages: totalPages,
          count: totalResults
        }
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.toString(),
        data: null
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
      const phone = await Phone.findById(req.params.id)
      if (!phone) {
        return res.status(404).json({
          success: false,
          message: 'Phone not found',
          data: null
        })
      }

      res.status(200).json({
        success: true,
        data: phone
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.toString(),
        data: null
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async create(req: Request, res: Response): Promise<void> {
    const { model, brand, price, description, colors, images, featured, sections } = req.body
    try {
      const newPhone = new Phone({
        model,
        brand,
        price,
        description,
        colors,
        images,
        featured,
        sections
      })
      await newPhone.save()

      res.status(200).json({
        success: true,
        data: newPhone
      })
    } catch (err) {
      res.status(err.message.startsWith('Phone validation failed') ? 400 : 500).json({
        success: false,
        message: err.toString(),
        data: null
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public update = async (req: Request, res: Response): Promise<any> => {
    const { model, brand, price, description, colors, images, featured, sections } = req.body
    try {
      const phoneUpdated = await Phone.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            model,
            brand,
            price,
            description,
            colors,
            images,
            featured,
            sections,
            updatedAt: Date.now()
          }
        },
        { new: true }
      )

      if (!phoneUpdated) {
        return res.status(404).json({
          success: false,
          message: 'Phone not found',
          data: null
        })
      }

      res.status(200).json({
        success: true,
        data: phoneUpdated
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.toString(),
        data: null
      })
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const phone = await Phone.findByIdAndRemove(req.params.id)

      if (!phone) {
        return res.status(404).json({
          success: false,
          message: 'Phone not found',
          data: null
        })
      }
      res.status(204).json()
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.toString(),
        data: null
      })
    }
  }
}
