import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Types } from 'mongoose'
import { sortDirection , SortDirection } from '../../../constains/common'
import { UserStatus, statusProduct, productsTag } from '../../../constains/common';
export enum SortBy {
  id = '_id',
  title = 'title',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}
export class CreateProductDto {
  @ApiPropertyOptional()
  readonly name?: string

  @ApiPropertyOptional()
  readonly description?: string

  @ApiPropertyOptional()
  readonly photos?: string

  @ApiPropertyOptional()
  readonly price?: string

  @ApiPropertyOptional()
  readonly origin?: number

  @ApiPropertyOptional()
  readonly nextWeight?: string

  @ApiPropertyOptional({enum:statusProduct})
  readonly status?: string

  @ApiPropertyOptional()
  readonly tradeMark?: string

  @ApiPropertyOptional({enum:productsTag})
  readonly tag?: string

  @ApiPropertyOptional()
  readonly inCard?: string

  @ApiPropertyOptional()
  readonly percentDiscount?: string

  @ApiPropertyOptional()
  readonly quantitySold?: string

  @ApiPropertyOptional()
  readonly calories?: string

  @ApiPropertyOptional({enum:UserStatus})
  readonly statusAccount?: string

  @ApiPropertyOptional()
  readonly createdBy?: Types.ObjectId

  @ApiPropertyOptional()
  readonly storeOwnerID?: Types.ObjectId

}

export class DataUpdateProductDto {
  @ApiPropertyOptional({enum:UserStatus})
  readonly statusAccount?: string

  @ApiPropertyOptional()
  readonly name?: string

  @ApiPropertyOptional()
  readonly description?: string

  @ApiPropertyOptional()
  readonly photos?: string

  @ApiPropertyOptional()
  readonly price?: string

  @ApiPropertyOptional()
  readonly origin?: number

  @ApiPropertyOptional()
  readonly nextWeight?: string

  @ApiPropertyOptional({enum:productsTag})
  readonly tag?: string

  @ApiPropertyOptional()
  readonly inCard?: string

  @ApiPropertyOptional()
  readonly percentDiscount?: string

  @ApiPropertyOptional()
  readonly quantitySold?: string

  @ApiPropertyOptional()
  readonly calories?: string

  @ApiPropertyOptional({enum:statusProduct})
  readonly status?: string

  @ApiPropertyOptional()
  readonly tradeMark?: string
}

export class ParamProductDto {
  @ApiPropertyOptional()
  readonly productID?: Types.ObjectId
}

export class FindManyProductDto {
  @ApiPropertyOptional({ enum: SortBy })
  readonly sortBy?: SortBy = SortBy.id

  @ApiPropertyOptional({ enum: sortDirection })
  readonly sortDirection?: SortDirection = SortDirection.asc

  @ApiPropertyOptional()
  readonly limit?: number

  @ApiPropertyOptional()
  readonly storeOwnerID?: Types.ObjectId

  @ApiPropertyOptional()
  readonly offset?: number

  @ApiPropertyOptional()
  readonly cursor?: string

  @ApiPropertyOptional()
  readonly name?: string

  @ApiPropertyOptional()
  readonly description?: string

  @ApiPropertyOptional()
  readonly photos?: string

  @ApiPropertyOptional()
  readonly price?: string

  @ApiPropertyOptional()
  readonly origin?: number

  @ApiPropertyOptional()
  readonly nextWeight?: string

  @ApiPropertyOptional({enum:productsTag})
  readonly tag?: string

  @ApiPropertyOptional()
  readonly inCard?: string

  @ApiPropertyOptional()
  readonly percentDiscount?: string

  @ApiPropertyOptional()
  readonly quantitySold?: string

  @ApiPropertyOptional()
  readonly calories?: string

  @ApiPropertyOptional({enum:UserStatus})
  readonly statusAccount?: string

  @ApiPropertyOptional({enum:statusProduct})
  readonly status?: string

  @ApiPropertyOptional()
  readonly tradeMark?: string
}
