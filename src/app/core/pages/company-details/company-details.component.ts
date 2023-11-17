import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Input} from "@angular/core";
import {Company} from "../../models/company.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.scss'
})
export class CompanyDetailsComponent {
  @Input() company: Company;

  constructor(private _route: Router) {}
  listOfficers() {
    this._route.navigate(['officers'], { queryParams: { companyNumber: this.company.company_number } });
  }

}
