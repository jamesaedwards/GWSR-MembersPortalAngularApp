import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewhomeComponent } from './renewhome/renewhome.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestInviteEmailComponent } from './request-invite-email/request-invite-email.component';

const routes: Routes = [
  { path: '', component: RenewhomeComponent },
  { path: 'resend', component: RequestInviteEmailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RenewRoutingModule { 




}
