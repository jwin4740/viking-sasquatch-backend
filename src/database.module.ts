import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { config } from 'process';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize:
          configService.get('NODE_ENVIRONMENT') === 'production' ? false : true,
      }),
    }),
  ],
})
export class DatabaseModule {}
