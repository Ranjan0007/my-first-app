import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tabe1PageRoutingModule } from './tabe1-routing.module';

import { Tabe1Page } from './tabe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabe1PageRoutingModule
  ],
  declarations: [Tabe1Page]
})
export class Tabe1PageModule {}
