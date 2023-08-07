import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path: 'experience',
  //   component: ExperienceComponent,
  // },
  {
    path: 'hobby',
    loadChildren: () =>
      import('./modules/hobby-module/hobby.module').then((m) => m.HobbyModule),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
