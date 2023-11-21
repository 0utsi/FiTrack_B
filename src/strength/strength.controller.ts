import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { StrengthExercise } from './entities/strengthExercise.entity';
import { StrengthService } from './strength.service';
import { StrengthSet } from './entities/strengthSet.entity';

@Controller('strength')
export class StrengthController {
  constructor(private readonly strengthService: StrengthService) {}

  @Post()
  async createStrengthExercise(
    @Body('exerciseName') exerciseName: string,
    @Body('date') date: Date,
    @Body('sets') sets: StrengthSet[],
  ) {
    return this.strengthService.createStrengthExercise(
      exerciseName,
      date,
      sets,
    );
  }

  @Get()
  async getAllExercises(
    @Query('sortBy') sortBy: string,
    @Query('order') order: string,
  ): Promise<StrengthExercise[]> {
    return this.strengthService.getAllStrengthExercises(sortBy, order);
  }

  @Delete(':id')
  async deleteStrengthExercise(@Param('id') id: number): Promise<void> {
    this.strengthService.deleteStrengthExercise(id);
  }

  @Put(':id')
  async updateStrengthExercise(
    @Param('id') id: number,
    @Body('exerciseName') exerciseName: string,
    @Body('date') date: Date,
    @Body('sets') sets: StrengthSet[],
  ): Promise<void> {
    await this.strengthService.updateStrengthExercise(
      id,
      exerciseName,
      date,
      sets,
    );
  }
}
