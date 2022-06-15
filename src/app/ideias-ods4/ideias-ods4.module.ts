import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds4PageRoutingModule } from './ideias-ods4-routing.module';

import { IdeiasOds4Page } from './ideias-ods4.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds4PageRoutingModule
  ],
  declarations: [IdeiasOds4Page, FooterComponent]
})
export class IdeiasOds4PageModule {}
