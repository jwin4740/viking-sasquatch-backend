import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './entities/child.entity';
import { Factory } from 'src/factory/entities/factory.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Child]),
    TypeOrmModule.forFeature([Factory]),
  ],
  controllers: [ChildController],
  providers: [ChildService],
})
export class ChildModule {}
