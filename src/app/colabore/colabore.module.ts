import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaborePageRoutingModule } from './colabore-routing.module';

import { ColaborePage } from './colabore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaborePageRoutingModule
  ],
  declarations: [ColaborePage]
})
export class ColaborePageModule {}
