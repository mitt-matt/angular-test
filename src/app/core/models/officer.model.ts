import {Address} from "./address.model";

export interface Officer {
  address: Address;
  name: string;
  appointed_on: number;
  officer_role: string;
  links: { officer: { appointments: string } };
  date_of_birth: { month: number, year: number };
  occupation: string;
  country_of_residence: string;
  nationality: string;
}
