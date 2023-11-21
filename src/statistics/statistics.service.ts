import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { StrengthExercise } from '../strength/entities/strengthExercise.entity';
import { Cardio } from '../cardio/cardio.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Cardio)
    private cardioRepository: Repository<Cardio>,
    @InjectRepository(StrengthExercise)
    private strengthRepository: Repository<StrengthExercise>,
  ) {}

  async getTotalWeightLifted(): Promise<number> {
    const strengthExercises = await this.strengthRepository.find({
      relations: ['sets'],
    });
    console.log(strengthExercises);
    let totalWeight = 0;

    strengthExercises.forEach((exercise) => {
      if (exercise.sets && exercise.sets.length > 0) {
        totalWeight += exercise.sets.reduce(
          (acc, set) => acc + (set.weight || 0),
          0,
        );
      }
    });

    return totalWeight;
  }

  async getTotalDistance(): Promise<number> {
    const cardioExercise = await this.cardioRepository.find();
    const totalDistance = cardioExercise.reduce(
      (sum, distances) => sum + distances.distance,
      0,
    );
    return totalDistance;
  }
}
