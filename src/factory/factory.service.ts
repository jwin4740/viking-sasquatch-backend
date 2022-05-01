import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { Factory } from './entities/factory.entity';

@Injectable()
export class FactoryService {
  constructor(
    @InjectRepository(Factory)
    private readonly factoryRepository: Repository<Factory>,
  ) {}

  create(createFactoryDto: CreateFactoryDto) {
    const factory = new Factory();
    factory.name = createFactoryDto.name;
    return this.factoryRepository.save(factory);
  }

  findAll() {
    return `This action returns all factory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factory`;
  }

  update(id: number, updateFactoryDto: UpdateFactoryDto) {
    return `This action updates a #${id} factory`;
  }

  remove(id: number) {
    return `This action removes a #${id} factory`;
  }
}
