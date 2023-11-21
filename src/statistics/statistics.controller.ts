import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get()
  async getStatistic(): Promise<any> {
    const totalDistance = await this.statisticsService.getTotalDistance();
    const totalWeight = await this.statisticsService.getTotalWeightLifted();
    const statistics = {
      totalDistance: totalDistance,
      totalWeight: totalWeight,
    };
    return statistics;
  }
}
