import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinHomeComponent } from './join-home/join-home.component';
import { JoinRoutingModule } from './join-routing.module';
import { PersondetailsFormComponent } from './persondetails-form/persondetails-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';



@NgModule({
  declarations: [
    JoinHomeComponent,
    PersondetailsFormComponent,
    ConfirmSuccessComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class JoinModule { }
