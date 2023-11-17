import {Officer} from "./officer.model";

export interface OfficerResponse {
  etag: string;
  links: { self: string };
  kind: string;
  items_per_page: number;
  items: Officer[];
}
