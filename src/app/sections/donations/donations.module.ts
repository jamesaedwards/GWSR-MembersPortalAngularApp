import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsHomeComponent } from './donations-home/donations-home.component';
import { AppeallistComponent } from './appeallist/appeallist.component';
import { DonationDetailsComponent } from './donation-details/donation-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DonationsHomeComponent,
    AppeallistComponent,
    DonationDetailsComponent,
  ],
  imports: [
  FormsModule,
  ReactiveFormsModule,
    CommonModule,
    DonationsRoutingModule,
    SharedModule
  ]
})
export class DonationsModule { }
