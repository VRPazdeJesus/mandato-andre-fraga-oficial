import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespostaDeEnvioPage } from './resposta-de-envio.page';

const routes: Routes = [
  {
    path: '',
    component: RespostaDeEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespostaDeEnvioPageRoutingModule {}
