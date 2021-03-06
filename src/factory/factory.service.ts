import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChildService } from 'src/child/child.service';
import { CreateChildDto } from 'src/child/dto/create-child.dto';
import { Child } from 'src/child/entities/child.entity';

import { getConnection, getManager, Repository } from 'typeorm';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { Factory } from './entities/factory.entity';

@Injectable()
export class FactoryService {
  constructor(
    @Inject(ChildService)
    private readonly childService: ChildService,
    @InjectRepository(Factory)
    private readonly factoryRepository: Repository<Factory>,
  ) {}

  async create(createFactoryDto: CreateFactoryDto) {
    const factory = new Factory();
    factory.name = createFactoryDto.name;
    factory.lowerBoundChildNodes = createFactoryDto.lowerBoundChildNodes;
    factory.upperBoundChildNodes = createFactoryDto.upperBoundChildNodes;
    factory.numberOfChildren = createFactoryDto.numberOfChildren;
    //TODO: errror handling
    // this.factoryRepository.save(factory).catch((err) => console.warn(err));

    //  TODO: rewrite as Transaction

    const fact = await this.factoryRepository.save(factory);
    await this.childService.createBulk(fact);
    console.warn(fact);

    return fact;
  }

  findAll() {
    return this.factoryRepository.find({
      relations: ['children'],
    });
  }

  findOne(id: number) {
    const res = this.factoryRepository.findOne(id, {
      relations: ['children'],
    });
    return res;
  }

  async update(id: number, updateFactoryDto: UpdateFactoryDto) {
    const factory = new Factory();
    factory.name = updateFactoryDto.name;
    factory.lowerBoundChildNodes = updateFactoryDto.lowerBoundChildNodes;
    factory.upperBoundChildNodes = updateFactoryDto.upperBoundChildNodes;
    factory.numberOfChildren = updateFactoryDto.numberOfChildren;

    const delRes = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Child)
      .where('factoryId = :id', { id: id })
      .execute();

    console.warn(delRes);
    const updateFactory = await this.factoryRepository.update(
      { id: id },
      factory,
    );
    const res2 = await this.findOne(id);
    await this.childService.createBulk(res2);

    return updateFactory;
  }

  remove(id: number) {
    return this.factoryRepository.delete(id);
  }
}
