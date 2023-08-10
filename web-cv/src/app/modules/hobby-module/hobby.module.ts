import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';

import { HobbyRoutingModule } from './hobby-routing.module';
import { HobbyComponent } from './hobby/hobby.component';
import { ModalComponent } from './hobby/components/modal/modal.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HobbyComponent, ModalComponent],
  imports: [CommonModule, HobbyRoutingModule, DialogModule, MatIconModule],
})
export class HobbyModule {}
