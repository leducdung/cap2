import { Controller, Get, Request, Post, UseGuards,Body , Put , Param, Query} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard';
import { LocalAuthGuard } from '../../auth/local/local-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { CreateUserDto } from './model/users.dto';
import { ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service';
import { UsersCombinedService } from './users.combined.service';
import * as bcrypt from 'bcrypt'

@ApiTags('auth')
@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
    private readonly usersCombinedService: UsersCombinedService,
) { }

  @UseGuards(JwtAuthGuard)
  @Get('profile/findMany')
  async findMany(
    @Query() query,
    @Request() { req },
  ){
    try {
      const users = await this.usersService.findMany({
        query,
      })

      return users
    } catch (error) {
      throw error
    }
  }

  @UseGuards()
  @Post('register')
  async createOne(
    @Body() CreateUserDto: CreateUserDto,
    @Request() { user },
  ){
    try {

      const saltOrRounds = await 10;

      const hash = await bcrypt.hash(CreateUserDto.passWord ,saltOrRounds);

      return await this.usersCombinedService.createOneUserAndAcess({
        data : CreateUserDto
      })
    } catch (error) {
      return error
    }
  }

  @UseGuards( )
  @Post('/login')
  async login(
    @Body() createUserDto:CreateUserDto,
    @Request() { user }) {
    try {
      return this.authService.login(createUserDto);
    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile/:_id')
  async findOne(
    @Param() _id ,
    @Request() req
  ) {
    try {
      console.log(_id);
      return this.usersService.findOneUser(_id)
    } catch (error) {
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile/:_id')
  async updateOne(
    @Param() _id ,
    @Body() data ,
    @Request() req
  ) {
    try {
      return this.usersCombinedService.UpdateOneUserAndAcess({data,_id})
    } catch (error) {
      throw error
    }
  }

}