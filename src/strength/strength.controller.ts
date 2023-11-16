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
  async getAllExercises(
    @Query('sortBy') sortBy: string,
    @Query('order') order: string,
  ): Promise<Strength[]> {
    return this.strengthService.getAllStrengthTraining(sortBy, order);
  }
  @Delete(':id')
  async deleteStrengthExercise(@Query('id') id: number): Promise<void> {
    this.strengthService.deleteStrengthExercise(id);
  }

  @Put(':id')
  async updateStrengthExercise(
    @Param('id') id: number,
    @Body('exerciseName') exerciseName: string,
    @Body('weight') weight: number,
    @Body('sets') sets: number,
    @Body('repetitions') repetitions: number,
    @Body('date') date: Date,
  ): Promise<void> {
    await this.strengthService.updateStrengthExercise(
      id,
      exerciseName,
      weight,
      sets,
      repetitions,
      date,
    );
  }
}
