import { Schema, model } from 'mongoose'

const PhoneSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
      trim: true
    },
    brand: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    colors: [
      {
        name: {
          type: String,
          required: true,
          trim: true
        },
        color: {
          type: String,
          required: true
        }
      }
    ],
    images: [String],
    featured: [
      {
        icon: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        }
      }
    ],
    sections: [
      {
        name: {
          type: String,
          required: true
        },
        features: [
          {
            name: {
              type: String,
              required: true,
              trim: true
            },
            value: {
              type: String,
              required: true,
              trim: true
            }
          }
        ]
      }
    ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
  }
  // {
  //   timestamps: true,
  //   useNestedStrict: true
  // }
)

export default model('Phone', PhoneSchema)
