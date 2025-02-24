import { Controller, Get, Logger, Query } from '@nestjs/common';
import { PowerGenerationService } from './power-generation.service';

@Controller('/predict/power-generation')
export class PowerGenerationController {
  private logger = new Logger('PowerGenerationController');
  constructor(private powerGenerationService: PowerGenerationService) {}

  @Get()
  getPowerGeneration(@Query('address') address: string) {
    this.logger.verbose(`address: ${address} trying to get power generation`);
    return this.powerGenerationService.getPowerGeneration(address);
  }
}
