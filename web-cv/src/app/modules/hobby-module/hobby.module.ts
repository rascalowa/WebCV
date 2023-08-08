import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';

import { HobbyRoutingModule } from './hobby-routing.module';
import { HobbyComponent } from './hobby/hobby.component';
import { TravelComponent } from './hobby/pages/travel/travel.component';
import { KiteComponent } from './hobby/pages/kite/kite.component';
import { HorsesComponent } from './hobby/pages/horses/horses.component';
import { ModalComponent } from './hobby/components/modal/modal.component';

@NgModule({
  declarations: [
    HobbyComponent,
    TravelComponent,
    KiteComponent,
    HorsesComponent,
    ModalComponent,
  ],
  imports: [CommonModule, HobbyRoutingModule, DialogModule],
})
export class HobbyModule {}
