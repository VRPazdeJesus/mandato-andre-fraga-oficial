import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasPageRoutingModule } from './ideias-routing.module';

import { IdeiasPage } from './ideias.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasPageRoutingModule
  ],
  declarations: [IdeiasPage, FooterComponent]
})
export class IdeiasPageModule {}
