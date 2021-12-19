import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboreDashboardPage } from './colabore-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ColaboreDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboreDashboardPageRoutingModule {}
