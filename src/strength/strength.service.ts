import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strength } from './strength.entity';

@Injectable()
export class StrengthService {
  constructor(
    @InjectRepository(Strength)
    private strengthRepository: Repository<Strength>,
  ) {}

  async createStrengthExervise(
    exerciseName: string,
    weight: number,
    sets: number,
    repetitions: number,
    date: Date,
  ): Promise<Strength> {
    const cardio = this.strengthRepository.create({
      exerciseName,
      weight,
      sets,
      repetitions,
      date,
    });
    return this.strengthRepository.save(cardio);
  }

  async getAllStrengthTraining(): Promise<Strength[]> {
    return this.strengthRepository.find({
      order: { date: 'ASC' },
    });
  }
}
