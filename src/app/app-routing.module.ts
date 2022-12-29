import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'join', loadChildren: () => import('./join/join.module').then(m=>m.JoinModule)},
  {path: 'renew', loadChildren: () => import('./renew/renew.module').then(m=>m.RenewModule)},
  {path: 'landing', component: LandingComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
