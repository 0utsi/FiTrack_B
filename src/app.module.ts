import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardioModule } from './cardio/cardio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cardio } from './cardio/cardio.entity';
import { StrengthModule } from './strength/strength.module';
import { StrengthExercise } from './strength/entities/strengthExercise.entity';
import { StatisticsModule } from './statistics/statistics.module';
import { StrengthSet } from './strength/entities/strengthSet.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.USER_DB,
      password: process.env.USER_PASS,
      database: 'mati',
      entities: [Cardio, StrengthExercise, StrengthSet],
      synchronize: true,
    }),
    CardioModule,
    StrengthModule,
    StatisticsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
