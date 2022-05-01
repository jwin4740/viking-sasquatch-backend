import { IsNotEmpty, IsString } from 'class-validator';

// TODO: no extra junk in request
export class CreateFactoryDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  public lowerBoundChildNodes: number;
  public upperBoundChildNodes: number;
}
