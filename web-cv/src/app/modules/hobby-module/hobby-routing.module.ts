import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbyComponent } from './hobby/hobby.component';
import { TravelComponent } from './travel/travel.component';
import { KiteComponent } from './kite/kite.component';
import { HorsesComponent } from './horses/horses.component';

const routes: Routes = [
  {
    path: '',
    component: HobbyComponent,
    children: [
      { path: 'travel', component: TravelComponent },
      { path: 'kite', component: KiteComponent },
      { path: 'horses', component: HorsesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HobbyRoutingModule {}
