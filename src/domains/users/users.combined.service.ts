import { Injectable } from '@nestjs/common'
import { EmployeesService } from '../employees/employees.service'
import { StoreOwnersService } from '../storeOwners/storeOwners.service'
import { UsersService } from './users.service';
import { Users } from './model/users.interface'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersCombinedService {
  constructor(
    private readonly employeesService: EmployeesService,
    private readonly storeOwnersService: StoreOwnersService,
    private readonly usersService: UsersService,
  ) { }

  async createOneUserAndAcess({ data }): Promise<Users | undefined> {
    try {
      const saltOrRounds = await 10;

      const hash = await bcrypt.hash(data.passWord, saltOrRounds);


      const storeOwner = await this.storeOwnersService.createOne({
        data
      })

      const user = await this.usersService.createOne({
        data: {
          ...data,
          storeOwnerID: storeOwner._id,
          userName: data.userName,
          passWord: hash,
        }
      })



      return await user
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async UpdateOneUserAndAcess({ data, _id }): Promise<Users | any> {
    try {

      const user = await this.usersService.findOneUser(_id)

      if (data.passWord) {
        const saltOrRounds = await 10;

        const hash = await bcrypt.hash(data.passWord, saltOrRounds);

        await this.usersService.updateOne({
          data: {
            passWord: hash,
          },
          _id
        })
      }

      if (!data.passWord) {
        await this.usersService.updateOne({
          data, _id
        })
      }

      if (data.rolePending === 'STOREOWNER' && data.rolePending != user.role) {
        await this.storeOwnersService.updateOne({
          data: { status: 'PENDING' },
          _id: user.storeOwnerID
        })
      }

      if (data.role === 'STOREOWNER') {
        await this.storeOwnersService.updateOne({
          data: { status: 'NOSTATUS' },
          _id: user.storeOwnerID
        })
      }

      const userUpdated = await this.usersService.findOneUser(_id)

      return await userUpdated
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
