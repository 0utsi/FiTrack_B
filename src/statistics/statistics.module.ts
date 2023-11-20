import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrengthExercise } from '../strength/entities/strengthExercise.entity';
import { Cardio } from '../cardio/cardio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StrengthExercise, Cardio])],
  providers: [StatisticsService],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
