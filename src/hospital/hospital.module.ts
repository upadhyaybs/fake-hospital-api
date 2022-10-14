import { Module } from '@nestjs/common';
import { HospitalService } from './service/hospital.service';
import { HospitalController } from './controller/hospital.controller';

@Module({
  controllers: [HospitalController],
  providers: [HospitalService]
})
export class HospitalModule {}
