

import { Document, Types } from 'mongoose'

export interface CommentAndRatings extends Document {
  title?: string
  description?: string
  isFaborit?: Boolean
  rateStar?: number
  comment?: String
  createdBy?: string
  productID?: string
  createdAt?: Date
  updatedAt?: Date
}

export const fieldNeedToUseRegex = ['title']