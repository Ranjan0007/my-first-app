import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabe1Page } from './tabe1.page';

const routes: Routes = [
  {
    path: '',
    component: Tabe1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tabe1PageRoutingModule {}
