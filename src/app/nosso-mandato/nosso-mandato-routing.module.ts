import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NossoMandatoPage } from './nosso-mandato.page';

const routes: Routes = [
  {
    path: '',
    component: NossoMandatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NossoMandatoPageRoutingModule {}
