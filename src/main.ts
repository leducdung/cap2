import { NestFactory } from '@nestjs/core';
import { TestModule } from './domains/test/test.module';
import { MyAppModule } from './domains/myApp.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './domains/users/users.module';
import { StoreOwnersModule } from './domains/storeOwners/storeOwners.module';
import { EmployeesModule } from './domains/employees/employees.module';
import { ProductsModule } from './domains/\bproducts/products.module';
import { CommentAndRatingsModule } from './domains/commentAndRatings/commentAndRatings.module';
import { NoticationsModule } from './domains/notications/notications.module';

async function bootstrap() {
  const app = await NestFactory.create(MyAppModule);

  const options = new DocumentBuilder()
    .setTitle('OpenAPI HomeMarket')
    .setDescription('HomeMarket API description')
    .setVersion('1.0')
    .addTag('HomeMarket')
    .build();

  const apiDocument = SwaggerModule.createDocument(app, options, {
    include: [
      TestModule,
      UsersModule,
      StoreOwnersModule,
      EmployeesModule,
      ProductsModule,
      CommentAndRatingsModule,
      NoticationsModule,
    ],
  });

  SwaggerModule.setup('api', app, apiDocument);

  app.enableCors()

  var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
  var server_host = process.env.YOUR_HOST || '0.0.0.0';
  await app.listen(server_port, server_host, function () {
    console.log('Listening on port %d', server_port);
  })
}

bootstrap();
