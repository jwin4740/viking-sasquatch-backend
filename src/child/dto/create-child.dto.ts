import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChildDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public factoryId: number;
}
