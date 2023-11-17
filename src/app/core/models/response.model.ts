export interface Response<t> {
  page_number: number;
  kind: string;
  total_results: number;
  items: t[];
}
