import * as mongoose from 'mongoose'
import { UserStatus, UserRole, UserAccessStatus } from '../../../constains/common'

const {
  Types: { ObjectId },
} = mongoose.Schema

export const ProductsSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  photos: { type: String, default: null },
  price: { type: Number, default: null },
  status:  { type: Number, default: null },
  tradeMark: { type: String, default: null},
  origin: { type: String, default: null},
  nextWeight: { type: Number, default: null},
  tag: { type: String, default: null},
  inCard: { type: Boolean, default: null},
  percentDiscount: { type: Number, default: null},
  quantitySold: { type: Number, default: null},
  calories: { type: String, default: null},
  createdBy: { type: ObjectId, ref:  'Users'},
}, {
  timestamps: true,
})
