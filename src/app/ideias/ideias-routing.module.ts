import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeiasPage } from './ideias.page';

const routes: Routes = [
  {
    path: '',
    component: IdeiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeiasPageRoutingModule {}
