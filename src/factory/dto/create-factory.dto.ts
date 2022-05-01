import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFactoryDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
