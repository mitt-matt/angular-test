import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {mergeMap, switchMap, take} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {OfficerService} from "../../services/officers/officer.service";
import {merge} from "rxjs";
import {CompanyService} from "../../services/company/company.service";
import {Company} from "../../models/company.model";
import {Officer} from "../../models/officer.model";
import {OfficerResponse} from "../../models/officerResponse.model";

@Component({
  selector: 'app-officer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './officer-list.component.html',
  styleUrl: './officer-list.component.scss'
})
export class OfficerListComponent implements OnInit{
    company: Company;
    officers: Officer[];

  constructor(private _activatedRoute: ActivatedRoute,
              private _officers: OfficerService,
              private _company: CompanyService) {
  }

  private isOfficers(object: any): object is OfficerResponse {
      return 'etag' in object;
  }
  ngOnInit(): void {
      this._activatedRoute.queryParamMap.pipe(take(1),switchMap((params)=> {
          const search = params.get('companyNumber');
          return merge(this._company.search(search), this._officers.getOfficers(search));
      })).subscribe(res => {
            if (this.isOfficers(res)) {
                this.officers = res.items;
            } else {
                this.company = res.items[0];
            }
      });
  }
}
