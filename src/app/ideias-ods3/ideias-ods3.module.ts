import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdeiasOds3PageRoutingModule } from './ideias-ods3-routing.module';

import { IdeiasOds3Page } from './ideias-ods3.page';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdeiasOds3PageRoutingModule
  ],
  declarations: [IdeiasOds3Page, FooterComponent]
})
export class IdeiasOds3PageModule {}
