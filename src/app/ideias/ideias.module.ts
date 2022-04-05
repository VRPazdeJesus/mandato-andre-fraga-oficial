import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasPageRoutingModule } from './ideias-routing.module';

import { IdeiasPage } from './ideias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasPageRoutingModule
  ],
  declarations: [IdeiasPage]
})
export class IdeiasPageModule {}
