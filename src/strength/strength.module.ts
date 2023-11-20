import { Module } from '@nestjs/common';
import { StrengthService } from './strength.service';
import { StrengthController } from './strength.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrengthExercise } from './entities/strengthExercise.entity';
import { StrengthSet } from './entities/strengthSet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StrengthExercise, StrengthSet])],
  providers: [StrengthService],
  controllers: [StrengthController],
})
export class StrengthModule {}
