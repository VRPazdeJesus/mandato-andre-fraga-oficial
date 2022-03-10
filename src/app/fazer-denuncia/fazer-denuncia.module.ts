import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FazerDenunciaPageRoutingModule } from './fazer-denuncia-routing.module';

import { FazerDenunciaPage } from './fazer-denuncia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FazerDenunciaPageRoutingModule
  ],
  declarations: [FazerDenunciaPage]
})
export class FazerDenunciaPageModule {}
