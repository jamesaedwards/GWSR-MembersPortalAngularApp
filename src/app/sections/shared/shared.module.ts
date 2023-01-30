import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';
import { PleaseWaitpopupComponent } from './please-waitpopup/please-waitpopup.component';
import { PaymentMethodsTableComponent } from './payment-methods-table/payment-methods-table.component';
import { MembershipDeclarationsComponent } from './membership-declarations/membership-declarations.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { TarrifsListComponent } from './tarrifs-list/tarrifs-list.component';



@NgModule({
  declarations: [
    AddressFormComponent,
    PleaseWaitpopupComponent,
    PaymentMethodsTableComponent,
    MembershipDeclarationsComponent,
    NotfoundComponent,
    TarrifsListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AddressFormComponent,
    PleaseWaitpopupComponent,
    PaymentMethodsTableComponent,
    MembershipDeclarationsComponent,
    TarrifsListComponent
  ]
})
export class SharedModule { }
