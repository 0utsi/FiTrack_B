import { Controller, Post, Body } from '@nestjs/common';
import { CardioService } from './cardio.service';

@Controller('cardio')
export class CardioController {
  constructor(private readonly cardioService: CardioService) {}

  @Post()
  async createCardioExercise(
    @Body('exerciseName') exerciseName: string,
    @Body('duration') duration: number,
    @Body('date') date: Date,
  ) {
    return this.cardioService.createCardioExercise(
      exerciseName,
      duration,
      date,
    );
  }
}
