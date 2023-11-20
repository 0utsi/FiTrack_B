import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StrengthExercise } from './entities/strengthExercise.entity';
import { StrengthSet } from './entities/strengthSet.entity';

@Injectable()
export class StrengthService {
  constructor(
    @InjectRepository(StrengthExercise)
    private strengthRepository: Repository<StrengthExercise>,
  ) {}

  async createStrengthExercise(
    exerciseName: string,
    date: Date,
    sets: StrengthSet[],
  ): Promise<StrengthExercise> {
    const strength = this.strengthRepository.create({
      exerciseName,
      date,
      sets,
    });
    return this.strengthRepository.save(strength);
  }

  async getAllStrengthExercises(
    sortBy: string,
    order: string,
  ): Promise<StrengthExercise[]> {
    const sortyBy: 'duration' | 'date' = sortBy as 'duration' | 'date';
    const orders: 'ASC' | 'DESC' = order as 'ASC' | 'DESC';

    const query = { order: { [sortyBy]: orders }, relations: ['sets'] };
    return this.strengthRepository.find(query);
  }

  async deleteStrengthExercise(id: number): Promise<void> {
    const strength = await this.strengthRepository.findOne({
      where: { id: id },
    });

    this.strengthRepository.remove(strength);
  }

  //   async updateStrengthExercise(
  //     id: number,
  //     exerciseName: string,
  //     date: Date,
  //     sets: StrengthSet[],
  //   ): Promise<void> {
  //     const existingExercise = await this.strengthRepository.findOne({
  //       where: { id: id },
  //     });

  //     existingExercise.exerciseName = exerciseName;
  //     existingExercise.sets = sets;
  //     existingExercise.date = date;

  //     await this.strengthRepository.save(existingExercise);
  //   }
}
