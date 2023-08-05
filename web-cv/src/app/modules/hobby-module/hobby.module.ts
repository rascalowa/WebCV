import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbyRoutingModule } from './hobby-routing.module';
import { TravelComponent } from './travel/travel.component';
import { KiteComponent } from './kite/kite.component';
import { HorsesComponent } from './horses/horses.component';
import { HobbyComponent } from './hobby/hobby.component';

@NgModule({
  declarations: [
    HobbyComponent,
    TravelComponent,
    KiteComponent,
    HorsesComponent,
  ],
  imports: [CommonModule, HobbyRoutingModule],
})
export class HobbyModule {}
