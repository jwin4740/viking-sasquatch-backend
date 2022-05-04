import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Factory } from 'src/factory/entities/factory.entity';
import { Repository } from 'typeorm';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { Child } from './entities/child.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class ChildService {
  constructor(
    @InjectRepository(Child)
    private readonly childRepository: Repository<Child>,
    @InjectRepository(Factory)
    private readonly factoryRepository: Repository<Factory>,
  ) {}
  async create(createChildDto: CreateChildDto) {
    const child = new Child();
    child.name = createChildDto.name;

    const factory = await this.factoryRepository.findOne(
      createChildDto.factoryId,
    );
    console.warn(factory);

    child.factory = factory;
    console.warn(child);
    return this.childRepository.save(child);
  }

  async createBulk(factory: Factory) {
    const insertedChildren: Child[] = [];
    const childrentoCreate = factory.numberOfChildren;
    for (let i = 0; i < childrentoCreate; i++) {
      const child = new Child();
      child.factory = factory;
      child.name = faker.name.firstName();
      insertedChildren.push(child);
    }

    await this.childRepository.save(insertedChildren);
  }

  findAll() {
    return `This action returns all child`;
  }

  findOne(id: number) {
    return `This action returns a #${id} child`;
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return `This action updates a #${id} child`;
  }

  remove(id: number) {
    return `This action removes a #${id} child`;
  }

  async removeAllLinkedChildren(factoryId: number) {
    await this.childRepository.delete('');
  }
}
