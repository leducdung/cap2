import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Types } from 'mongoose'
import { sortDirection , SortDirection } from '../../../constains/common'

export enum SortBy {
  id = '_id',
  title = 'title',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}


export class CreateUserDto {
  @ApiPropertyOptional()
  readonly userName?: string

  @ApiPropertyOptional()
  readonly passWord?: string

  @ApiPropertyOptional()
  readonly storeOwnerID?: Types.ObjectId

  @ApiPropertyOptional()
  readonly employeeID?: Types.ObjectId

  @ApiPropertyOptional()
  readonly fullName?: string

  @ApiPropertyOptional()
  readonly gender?: string

  @ApiPropertyOptional()
  readonly profilePicture?: string

  @ApiPropertyOptional()
  readonly email?: string

  @ApiPropertyOptional()
  readonly phone?: number

  @ApiPropertyOptional()
  readonly facebookID?: string

  @ApiPropertyOptional()
  readonly googleID?: string

  @ApiPropertyOptional()
  readonly status?: string

  @ApiPropertyOptional()
  readonly role?: string

  @ApiPropertyOptional()
  readonly rolePending?: string
}

export class DataUpdateUserDto {
  @ApiPropertyOptional()
  readonly userName?: string

  @ApiPropertyOptional()
  readonly passWord?: string

  @ApiPropertyOptional()
  readonly fullName?: string

  @ApiPropertyOptional()
  readonly profilePicture?: string

  @ApiPropertyOptional()
  readonly email?: string

  @ApiPropertyOptional()
  readonly gender?: string

  @ApiPropertyOptional()
  readonly phone?: number

  @ApiPropertyOptional()
  readonly status?: string

  @ApiPropertyOptional()
  readonly role?: string

  @ApiPropertyOptional()
  readonly rolePending?: string
}

export class ParamUserDto {
  @ApiPropertyOptional()
  readonly userID?: Types.ObjectId
}

export class FindManyDocumentsDto {
  @ApiPropertyOptional({ enum: SortBy })
  readonly sortBy?: SortBy = SortBy.id

  @ApiPropertyOptional({ enum: sortDirection })
  readonly sortDirection?: SortDirection = SortDirection.asc

  @ApiPropertyOptional()
  readonly limit?: number

  @ApiPropertyOptional()
  readonly offset?: number

  @ApiPropertyOptional()
  readonly cursor?: string

  @ApiPropertyOptional()
  readonly userName?: string

  @ApiPropertyOptional()
  readonly gender?: string

  @ApiPropertyOptional()
  readonly passWord?: string

  @ApiPropertyOptional()
  readonly storeOwnerID?: Types.ObjectId

  @ApiPropertyOptional()
  readonly employeeID?: Types.ObjectId

  @ApiPropertyOptional()
  readonly fullName?: string

  @ApiPropertyOptional()
  readonly profilePicture?: string

  @ApiPropertyOptional()
  readonly email?: string

  @ApiPropertyOptional()
  readonly phone?: number

  @ApiPropertyOptional()
  readonly facebookID?: string

  @ApiPropertyOptional()
  readonly googleID?: string

  @ApiPropertyOptional()
  readonly status?: string

  @ApiPropertyOptional()
  readonly rolePending?: string

  @ApiPropertyOptional()
  readonly role?: string
}
