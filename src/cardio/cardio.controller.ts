import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CardioService } from './cardio.service';
import { Cardio } from './cardio.entity';

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
  @Get()
  async getAllExercises(@Query('asc') asc: boolean): Promise<Cardio[]> {
    return this.cardioService.getAllCardio(asc);
  }
}
