import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ChildModule } from './child/child.module';
import { FactoryModule } from './factory/factory.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    ChildModule,
    FactoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
