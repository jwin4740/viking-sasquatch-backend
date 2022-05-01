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
    factory.lowerBoundChildNodes = createFactoryDto.lowerBoundChildNodes;
    factory.upperBoundChildNodes = createFactoryDto.upperBoundChildNodes;
    //TODO: errror handling
    // this.factoryRepository.save(factory).catch((err) => console.warn(err));
    return this.factoryRepository.save(factory);
  }

  findAll() {
    return this.factoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} factory`;
  }

  update(id: number, updateFactoryDto: UpdateFactoryDto) {
    const factory = new Factory();
    factory.name = updateFactoryDto.name;
    return this.factoryRepository.update({ id: id }, factory);
  }

  remove(id: number) {
    return this.factoryRepository.delete(id);
  }
}
