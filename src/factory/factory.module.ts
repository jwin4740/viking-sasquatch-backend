import { Module } from '@nestjs/common';
import { FactoryService } from './factory.service';
import { FactoryController } from './factory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factory } from './entities/factory.entity';
import { Child } from 'src/child/entities/child.entity';
import { ChildService } from 'src/child/child.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Factory]),
    TypeOrmModule.forFeature([Child]),
  ],
  controllers: [FactoryController],
  providers: [FactoryService, ChildService],
})
export class FactoryModule {}
