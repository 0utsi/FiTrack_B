import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Strength } from '../strength/strength.entity';
import { Cardio } from '../cardio/cardio.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Cardio)
    @InjectRepository(Strength)
    private cardioRepository: Repository<Cardio>,
    private strengthRepository: Repository<Strength>,
  ) {}
}
