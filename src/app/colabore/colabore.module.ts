import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColaborePageRoutingModule } from './colabore-routing.module';

import { ColaborePage } from './colabore.page';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColaborePageRoutingModule
  ],
  declarations: [ColaborePage, NavComponent, FooterComponent]
})
export class ColaborePageModule {}
