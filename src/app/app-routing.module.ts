import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchResultsComponent} from "./core/pages/search-results/search-results.component";
import {SearchComponent} from "./core/pages/search/search.component";
import {OfficerListComponent} from "./core/pages/officer-list/officer-list.component";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'search',
    component: SearchResultsComponent
  },
  {
    path: 'officers',
    component: OfficerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
