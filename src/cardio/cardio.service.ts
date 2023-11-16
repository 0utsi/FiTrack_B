import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cardio } from './cardio.entity';

@Injectable()
export class CardioService {
  constructor(
    @InjectRepository(Cardio)
    private cardioRepository: Repository<Cardio>,
  ) {}

  async createCardioExercise(
    exerciseName: string,
    duration: number,
    date: Date,
  ): Promise<Cardio> {
    const cardio = this.cardioRepository.create({
      exerciseName,
      duration,
      date,
    });
    return this.cardioRepository.save(cardio);
  }
  async getAllCardio(asc: boolean): Promise<Cardio[]> {
    console.log(asc);
    const order = asc ? 'ASC' : 'DESC';
    console.log(order);
    return this.cardioRepository.find({
      order: { date: 'ASC' },
    });
  }

  async deleteCardioExercise(id: number): Promise<void> {
    const cardio = await this.cardioRepository.findOne({ where: { id: id } });

    if (!cardio) {
      throw new NotFoundException(`Cardio exercise with ID ${id} not found`);
    }

    this.cardioRepository.remove(cardio);
  }

  async updateCardioExercise(
    id: number,
    exerciseName: string,
    duration: number,
    date: Date,
  ): Promise<void> {
    const existingCardio = await this.cardioRepository.findOne({
      where: { id: id },
    });

    existingCardio.exerciseName = exerciseName;
    existingCardio.duration = duration;
    existingCardio.date = date;

    await this.cardioRepository.save(existingCardio);
  }
}
