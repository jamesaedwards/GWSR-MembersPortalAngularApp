import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { LandingComponent } from './sections/landing/landing.component';
import { NotfoundComponent } from './sections/shared/notfound/notfound.component';
import { ContactComponent } from './sections/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'join', loadChildren: () => import('./sections/join/join.module').then(m=>m.JoinModule)},
  {path: 'renew', loadChildren: () => import('./sections/renew/renew.module').then(m=>m.RenewModule)},
  {path: 'donate', loadChildren: () => import('./sections/donations/donations.module').then(m=>m.DonationsModule)},
  {path: 'landing', component: LandingComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
