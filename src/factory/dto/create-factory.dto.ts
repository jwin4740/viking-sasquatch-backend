import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// TODO: no extra junk in request
export class CreateFactoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public lowerBoundChildNodes: number;

  @ApiProperty()
  public upperBoundChildNodes: number;
}
