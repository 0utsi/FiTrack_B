import { IsNotEmpty } from 'class-validator';

export class CreateCardioDto {
  @IsNotEmpty()
  exercise: string;

  @IsNotEmpty()
  duration: string;
}
