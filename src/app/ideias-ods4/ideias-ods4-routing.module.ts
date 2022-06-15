import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiasOds4Page } from './ideias-ods4.page';

const routes: Routes = [
  {
    path: '',
    component: IdeiasOds4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeiasOds4PageRoutingModule {}
