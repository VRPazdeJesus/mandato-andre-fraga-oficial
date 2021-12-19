import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogProjetosComSociedadeCivilPageRoutingModule } from './blog-projetos-com-sociedade-civil-routing.module';

import { BlogProjetosComSociedadeCivilPage } from './blog-projetos-com-sociedade-civil.page';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogProjetosComSociedadeCivilPageRoutingModule
  ],
  declarations: [BlogProjetosComSociedadeCivilPage, NavComponent, FooterComponent]
})
export class BlogProjetosComSociedadeCivilPageModule {}
