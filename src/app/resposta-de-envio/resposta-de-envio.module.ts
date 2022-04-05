import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespostaDeEnvioPageRoutingModule } from './resposta-de-envio-routing.module';

import { RespostaDeEnvioPage } from './resposta-de-envio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespostaDeEnvioPageRoutingModule
  ],
  declarations: [RespostaDeEnvioPage]
})
export class RespostaDeEnvioPageModule {}
