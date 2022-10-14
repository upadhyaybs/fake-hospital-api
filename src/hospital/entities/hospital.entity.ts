import { IsNotEmpty } from 'class-validator';

export class Hospital {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  zip: string;

  constructor(
    id: string,
    name: string,
    address: string,
    phone: string,
    zip: string,
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.zip = zip;
  }
}
