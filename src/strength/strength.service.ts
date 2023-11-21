import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StrengthExercise } from './entities/strengthExercise.entity';
import { StrengthSet } from './entities/strengthSet.entity';

@Injectable()
export class StrengthService {
  constructor(
    @InjectRepository(StrengthExercise)
    private strengthExRepository: Repository<StrengthExercise>,
  ) {}

  async createStrengthExercise(exerciseData: {
    exerciseName: string;
    date: string;
    sets: StrengthSet[];
  }): Promise<StrengthExercise> {
    const { exerciseName, date, sets } = exerciseData;
    console.log(sets, exerciseName, date);
    const strengthExercise = new StrengthExercise();
    strengthExercise.exerciseName = exerciseName;
    strengthExercise.date = new Date(date);
    strengthExercise.sets = sets?.map((setData) => {
      const set = new StrengthSet();
      set.repetitions = setData.repetitions;
      set.weight = setData.weight;
      return set;
    });

    await this.strengthExRepository.save(strengthExercise);
    return strengthExercise;
  }

  async getAllStrengthExercises(
    sortBy: string,
    order: string,
  ): Promise<StrengthExercise[]> {
    const sortyBy: 'duration' | 'date' = sortBy as 'duration' | 'date';
    const orders: 'ASC' | 'DESC' = order as 'ASC' | 'DESC';

    const query = { order: { [sortyBy]: orders }, relations: ['sets'] };
    return this.strengthExRepository.find(query);
  }

  async deleteStrengthExercise(id: number): Promise<void> {
    await this.strengthExRepository
      .createQueryBuilder()
      .delete()
      .from(StrengthSet)
      .where('strengthExerciseId = :id', { id })
      .execute();

    // Usuwanie z StrengthExercise
    await this.strengthExRepository
      .createQueryBuilder()
      .delete()
      .from(StrengthExercise)
      .where('id = :id', { id })
      .execute();
  }

  async updateStrengthExercise(
    id: number,
    exerciseName: string,
    date: Date,
    sets: StrengthSet[],
  ): Promise<void> {
    const existingExercise = await this.strengthExRepository.findOne({
      where: { id: id },
      relations: ['sets'],
    });

    existingExercise.exerciseName = exerciseName;
    existingExercise.sets = sets;
    existingExercise.date = date;

    await this.strengthExRepository.save(existingExercise);
  }
}
