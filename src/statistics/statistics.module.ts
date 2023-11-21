import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrengthExercise } from '../strength/entities/strengthExercise.entity';
import { Cardio } from '../cardio/cardio.entity';
import { StrengthSet } from '../strength/entities/strengthSet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StrengthExercise, StrengthSet, Cardio])],
  providers: [StatisticsService],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
