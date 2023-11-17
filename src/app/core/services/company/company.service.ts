import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Company} from "../../models/company.model";
import {Observable} from "rxjs";
import {Response} from "../../models/response.model";

interface ICompanyService {
  search(search_term: string): Observable<Response<Company>>;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService implements ICompanyService {

  constructor(private _http: HttpClient) { }

  search(search_term: string | null): Observable<Response<Company>>{
    return this._http.get<Response<Company>>(`/api/TruProxyAPI/rest/Companies/v1/Search?Query=${search_term}`);
  }
}
