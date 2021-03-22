import { MongooseModule } from '@nestjs/mongoose';


export const databaseModule  = MongooseModule.forRootAsync({
  useFactory: () => ({
    uri: process.env.DATABASE_URL,
  }),
});