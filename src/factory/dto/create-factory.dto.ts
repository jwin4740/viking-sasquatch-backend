import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFactoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsNumber()
  @ApiProperty()
  public lowerBoundChildNodes: number;

  @IsNumber()
  @ApiProperty()
  public upperBoundChildNodes: number;

  @IsNumber()
  @ApiProperty()
  public numberOfChildren: number;
}
