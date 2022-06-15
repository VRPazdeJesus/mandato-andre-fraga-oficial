import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiasOds11Page } from './ideias-ods11.page';

const routes: Routes = [
  {
    path: '',
    component: IdeiasOds11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeiasOds11PageRoutingModule {}
