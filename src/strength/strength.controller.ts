import { Controller, Post, Body, Get } from '@nestjs/common';
import { Strength } from './strength.entity';
import { StrengthService } from './strength.service';

@Controller('strength')
export class StrengthController {
  constructor(private readonly strengthService: StrengthService) {}

  @Post()
  async createCardioExercise(
    @Body('exerciseName') exerciseName: string,
    @Body('weight') weight: number,
    @Body('sets') sets: number,
    @Body('repetitions') repetitions: number,
    @Body('date') date: Date,
  ) {
    return this.strengthService.createStrengthExercise(
      exerciseName,
      weight,
      sets,
      repetitions,
      date,
    );
  }
  @Get()
  async getAllExercises(): Promise<Strength[]> {
    return this.strengthService.getAllStrengthTraining();
  }
}
