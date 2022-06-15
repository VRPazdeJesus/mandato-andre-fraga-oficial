import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiscalizacaoPageRoutingModule } from './fiscalizacao-routing.module';

import { FiscalizacaoPage } from './fiscalizacao.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiscalizacaoPageRoutingModule
  ],
  declarations: [FiscalizacaoPage, FooterComponent]
})
export class FiscalizacaoPageModule {}
