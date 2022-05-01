import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChildDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @IsNotEmpty()
  @ApiProperty()
  public factoryId: number;
}
