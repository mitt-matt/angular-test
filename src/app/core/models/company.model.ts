import {Address} from "./address.model";

export interface Company {
  company_status: string;
  address_snippet: string;
  date_of_creation: string;
  matches: { title: number[] };
  description: string;
  links: { self: string };
  company_number: string;
  title: string;
  company_type: string;
  address: Address;
  date_of_cessation: string;
  description_identifier: string[];
}


