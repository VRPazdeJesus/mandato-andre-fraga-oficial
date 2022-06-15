import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiasOds13Page } from './ideias-ods13.page';

const routes: Routes = [
  {
    path: '',
    component: IdeiasOds13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeiasOds13PageRoutingModule {}
