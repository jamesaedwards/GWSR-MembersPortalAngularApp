import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenewhomeComponent } from './renewhome/renewhome.component';
import { RenewRoutingModule } from './renew-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SecurityLookupComponent } from './security-lookup/security-lookup.component';
import { RequestInviteEmailComponent } from './request-invite-email/request-invite-email.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RenewhomeComponent,
    SecurityLookupComponent,
    RequestInviteEmailComponent
  ],
  imports: [
    RenewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class RenewModule { }
