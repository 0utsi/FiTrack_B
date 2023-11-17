import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strength } from '../strength/strength.entity';
import { Cardio } from '../cardio/cardio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Strength, Cardio])],
  providers: [StatisticsService],
  controllers: [StatisticsController],
})
export class StatisticsModule {}
