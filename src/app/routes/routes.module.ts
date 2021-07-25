import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoutesPageRoutingModule } from './routes-routing.module';

import { RoutesPage } from './routes.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RoutesPageRoutingModule
  ],
  declarations: [RoutesPage]
})
export class RoutesPageModule {}
