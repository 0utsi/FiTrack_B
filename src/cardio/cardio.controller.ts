import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
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
  async getAllExercises(
    @Query('order') order: string,
    @Query('sortBy') sortBy: string,
  ): Promise<Cardio[]> {
    return this.cardioService.getAllCardio(order, sortBy);
  }

  @Delete(':id')
  async deleteCardioExercise(@Query('id') id: number): Promise<void> {
    await this.cardioService.deleteCardioExercise(id);
  }

  @Put(':id')
  async updateCardioExercise(
    @Param('id') id: number,
    @Body('exerciseName') exerciseName: string,
    @Body('duration') duration: number,
    @Body('date') date: Date,
  ): Promise<void> {
    await this.cardioService.updateCardioExercise(
      id,
      exerciseName,
      duration,
      date,
    );
  }
}
