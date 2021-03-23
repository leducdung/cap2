import { NestFactory } from '@nestjs/core';
import { TestModule } from './domains/test/test.module';
import { MyAppModule } from './domains/myApp.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { UsersModule } from './domains/users/users.module';
import { StoreOwnersModule } from './domains/storeOwners/storeOwners.module'
import { EmployeesModule } from './domains/employees/employees.module';
import { ProductsModule } from './domains/\bproducts/products.module';

async function bootstrap(){
  const app = await NestFactory.create(MyAppModule);

  const options =new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('HomeMarket')
  .build();

  const apiDocument = SwaggerModule.createDocument(app, options,{
      include:[TestModule,
        UsersModule,
        StoreOwnersModule,
        EmployeesModule,
        ProductsModule,
      ],
  });
  SwaggerModule.setup('api', app, apiDocument);
    await app.listen(process.env.PORT, '0.0.0.0');
}

bootstrap();