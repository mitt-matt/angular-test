import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {CompanyService} from "./core/services/company/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Company Search';
}
