import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateChildDto {
  @IsString()
  @ApiProperty()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public factoryId: number;
}
