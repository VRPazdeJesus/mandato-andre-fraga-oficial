import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoDeLeiPage } from './projeto-de-lei.page';

const routes: Routes = [
  {
    path: '',
    component: ProjetoDeLeiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetoDeLeiPageRoutingModule {}
