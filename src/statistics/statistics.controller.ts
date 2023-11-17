import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  async getTotalWeightLifted(): Promise<number> {
    return await this.statisticsService.getTotalWeightLifted();
  }
  @Get()
  async getTotalDistance(): Promise<number> {
    return await this.statisticsService.getTotalDistance();
  }
}
