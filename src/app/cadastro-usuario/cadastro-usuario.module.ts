import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroUsuarioPageRoutingModule } from './cadastro-usuario-routing.module';

import { CadastroUsuarioPage } from './cadastro-usuario.page';
import { FooterComponent } from '../components/footer/footer.component';
import { NavComponent } from '../components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroUsuarioPageRoutingModule
  ],
  declarations: [CadastroUsuarioPage, NavComponent, FooterComponent]
})
export class CadastroUsuarioPageModule {}
