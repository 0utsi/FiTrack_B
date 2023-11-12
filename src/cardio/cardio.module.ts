import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cardio } from './cardio.entity';
import { CardioService } from './cardio.service';
import { CardioController } from './cardio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cardio])],
  providers: [CardioService],
  controllers: [CardioController],
})
export class CardioModule {}
