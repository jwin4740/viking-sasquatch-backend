import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { ChildModule } from './child/child.module';
import { FactoryModule } from './factory/factory.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    DatabaseModule,
    ChildModule,
    FactoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
