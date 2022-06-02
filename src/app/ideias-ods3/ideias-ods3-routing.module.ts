import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiasOds3Page } from './ideias-ods3.page';

const routes: Routes = [
  {
    path: '',
    component: IdeiasOds3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeiasOds3PageRoutingModule {}
