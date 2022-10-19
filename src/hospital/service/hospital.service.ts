import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateHospitalDto } from '../dto/create-hospital.dto';
import { UpdateHospitalDto } from '../dto/update-hospital.dto';
import { Hospital } from '../entities/hospital.entity';

@Injectable()
export class HospitalService {
  hospitals: Hospital[] = [];
  constructor() {
    this.hospitals.push(
      {
        id: uuidv4(),
        name: 'Northside Hospital',
        address: '12345 Some Address',
        phone: '555-55-5555',
        zip: '30041',
      },
      {
        id: uuidv4(),
        name: 'Mayo Clinic',
        address: '12345 Some Address',
        phone: '555-55-5555',
        zip: '55902',
      },
      {
        id: uuidv4(),
        name: 'UCLA Medical Center',
        address: '12345 Some Address',
        phone: '555-55-5555',
        zip: '90095',
      },
      {
        id: uuidv4(),
        name: 'Cedars-Sinai Medical Center',
        address: '12345 Some Address',
        phone: '555-55-5555',
        zip: '90048',
      },
      {
        id: uuidv4(),
        name: 'NewYork-Presbyterian Hospital',
        address: '12345 Some Address',
        phone: '555-55-5555',
        zip: '10065',
      },
    );
  }
  create(createHospitalDto: CreateHospitalDto) {
    this.hospitals.push({
      ...createHospitalDto,
      id: uuidv4(),
    });
    return this.hospitals.at(-1);
  }

  findAll(): Hospital[] {
    return this.hospitals;
  }

  findOne(id: string) {
    return this.hospitals.find((obj) => obj.id === id);
  }

  findByZip(zip: string): Hospital {
    return this.hospitals.find((obj) => obj.zip === zip);
  }
 
  update(_id: number, _updateHospitalDto: UpdateHospitalDto) {}

  remove(_id: number) {}
}
