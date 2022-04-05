import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SugerirProjetoDeLeisPage } from './sugerir-projeto-de-leis.page';

const routes: Routes = [
  {
    path: '',
    component: SugerirProjetoDeLeisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SugerirProjetoDeLeisPageRoutingModule {}
