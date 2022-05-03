import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FactoryService } from './factory.service';
import { CreateFactoryDto } from './dto/create-factory.dto';
import { UpdateFactoryDto } from './dto/update-factory.dto';
import { ApiResponse } from '@nestjs/swagger';
interface ChildResponse {
  id: number;
  name: string;
}

interface FactoryWithChildrenResponse {
  id: number;
  name: string;
  numberOfChildren: number;
  children: ChildResponse[];
}

@Controller('factory')
export class FactoryController {
  constructor(private readonly factoryService: FactoryService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  create(@Body() createFactoryDto: CreateFactoryDto) {
    return this.factoryService.create(createFactoryDto);
  }

  @Get()
  async findAll() {
    return this.factoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFactoryDto: UpdateFactoryDto) {
    return this.factoryService.update(+id, updateFactoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.factoryService.remove(+id);
  }
}
