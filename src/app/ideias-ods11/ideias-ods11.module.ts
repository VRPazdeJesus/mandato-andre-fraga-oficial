import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds11PageRoutingModule } from './ideias-ods11-routing.module';

import { IdeiasOds11Page } from './ideias-ods11.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds11PageRoutingModule
  ],
  declarations: [IdeiasOds11Page, FooterComponent]
})
export class IdeiasOds11PageModule {}
