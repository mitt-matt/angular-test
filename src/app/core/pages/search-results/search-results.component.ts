import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {switchMap, take} from "rxjs/operators";
import {Company} from "../../models/company.model";
import {CompanyService} from "../../services/company/company.service";
import {BoldNumberPipe} from "../../pipes/bold-number.pipe";
import {CompanyDetailsComponent} from "../company-details/company-details.component";

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, BoldNumberPipe, CompanyDetailsComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnInit{
  searchResults: Company[];
  selectedCompany: Company;
  constructor(private _activatedRoute: ActivatedRoute,
              private _company: CompanyService) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.pipe(take(1),switchMap((params)=> {
      const search = params.get('search');
      return this._company.search(search);
    })).subscribe(res => {
        this.searchResults = res.items;
      });
    }

    viewDetails(company: Company) {
      this.selectedCompany = company;
    }

}
