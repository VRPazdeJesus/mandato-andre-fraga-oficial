import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogProjetosComSociedadeCivilPage } from './blog-projetos-com-sociedade-civil.page';

const routes: Routes = [
  {
    path: '',
    component: BlogProjetosComSociedadeCivilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogProjetosComSociedadeCivilPageRoutingModule {}
