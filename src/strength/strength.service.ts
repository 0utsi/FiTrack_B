import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Strength } from './strength.entity';

@Injectable()
export class StrengthService {
  constructor(
    @InjectRepository(Strength)
    private strengthRepository: Repository<Strength>,
  ) {}

  async createStrengthExercise(
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

  async deleteStrengthExercise(id: number): Promise<void> {
    const strength = await this.strengthRepository.findOne({
      where: { id: id },
    });
    if (!strength) {
      throw new NotFoundException(`Cardio exercise with ID ${id} not found`);
    }
    this.strengthRepository.remove(strength);
  }
}
