import { Module } from '@nestjs/common';
import { StrengthService } from './strength.service';
import { StrengthController } from './strength.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Strength } from './strength.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Strength])],
  providers: [StrengthService],
  controllers: [StrengthController],
})
export class StrengthModule {}
