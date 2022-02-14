import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NossoMandatoPageRoutingModule } from './nosso-mandato-routing.module';

import { NossoMandatoPage } from './nosso-mandato.page';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NossoMandatoPageRoutingModule
  ],
  declarations: [NossoMandatoPage, NavComponent, FooterComponent]
})
export class NossoMandatoPageModule {}
