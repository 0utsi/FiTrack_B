import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Strength } from '../strength/strength.entity';
import { Cardio } from '../cardio/cardio.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Cardio)
    private cardioRepository: Repository<Cardio>,
    @InjectRepository(Strength)
    private strengthRepository: Repository<Strength>,
  ) {}

  async getTotalWeightLifted(): Promise<number> {
    const strengthExercises = await this.strengthRepository.find();
    const totalWeight = strengthExercises.reduce(
      (sum, exercise) => sum + exercise.weight,
      0,
    );
    return totalWeight;
  }

  async getTotalDistance(): Promise<number> {
    const distances = await this.cardioRepository.find();
    const totalDistance = distances.reduce(
      (sum, distances) => sum + distances.distance,
      0,
    );
    return totalDistance;
  }
}
