import { forwardRef, Module } from '@nestjs/common'
import { TestModule } from './test/test.module'
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { OAuthGoogleModule } from './o-auth-google/o-auth-google.module';
import { UsersModule } from './users/users.module';
import { StoreOwnersModule } from './storeOwners/storeOwners.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './\bproducts/products.module';


export const myAppImPortModules = [
  ConfigModule.forRoot(),
  forwardRef(() => TestModule),
  forwardRef(() => OAuthGoogleModule),
  forwardRef(() => UsersModule),
  forwardRef(() => StoreOwnersModule),
  forwardRef(() => EmployeesModule),
  forwardRef(() => ProductsModule),
]

@Module({
  imports: myAppImPortModules,
})
export class MyAppModule { }