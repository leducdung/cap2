import { Controller, Get, Request, Post, UseGuards,Body , Put , Param, Query , Delete} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { CreatestoreOwnerDto } from './model/storeOwners.dto';
import { ApiTags } from '@nestjs/swagger'
import { StoreOwnersService } from './storeOwners.service';
import * as bcrypt from 'bcrypt'

@ApiTags('storeOwners')
@Controller('storeOwners')
export class StoreOwnersController {
  constructor(
    private readonly storeOwnersService: StoreOwnersService,

) { }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async findMany(
    @Query() query,
    @Request() { req },
  ){
    try {
      const storeOwners = await this.storeOwnersService.findMany({
        query,
      })

      return storeOwners
    } catch (error) {
      throw error
    }
  }


  @UseGuards(JwtAuthGuard)
  @Get(':_id')
  async findOne(
    @Param() _id ,
    @Request() req
  ) {
    try {

      return this.storeOwnersService.findOneStoreOwner(_id)

    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('')
  async createOne(
    @Body() createstoreOwnerDto : CreatestoreOwnerDto,
    @Request() req
  ) {
    try {
      return this.storeOwnersService.createOne({data:createstoreOwnerDto})
    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':_id')
  async Delete(
    @Param() _id ,
    @Request() req
  ) {
    try {
      return this.storeOwnersService.deleteOne(_id)
    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put(':_id')
  async updateOne(
    @Param() _id ,
    @Body() data ,
    @Request() req
  ) {
    try {
      return this.storeOwnersService.updateOne({data,_id})
    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post(':_id/createEmployee')
  async createOneEmployee(
    @Param() _id ,
    @Request() req,
  ) {
    try {
      return this.storeOwnersService.createAccountEmployee({
       _id
      })
    } catch (error) {
      throw error
    }
  }

}