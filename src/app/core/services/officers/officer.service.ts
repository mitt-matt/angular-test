import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OfficerResponse} from "../../models/officerResponse.model";

interface IOfficerService {
  getOfficers(company_number: string): void;
}

@Injectable({
  providedIn: 'root'
})
export class OfficerService implements IOfficerService{

  constructor(private _http: HttpClient) { }

  getOfficers(company_number: string): Observable<OfficerResponse> {
    return this._http.get<OfficerResponse>(`/api/TruProxyAPI/rest/Companies/v1/Officers?companyNumber=${company_number}`);
  }
}
