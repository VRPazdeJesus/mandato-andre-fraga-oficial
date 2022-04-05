import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FazerDenunciaPage } from './fazer-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: FazerDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FazerDenunciaPageRoutingModule {}
