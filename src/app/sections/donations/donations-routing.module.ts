import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationsHomeComponent } from './donations-home/donations-home.component';


const routes: Routes = [
  { path: '', component: DonationsHomeComponent },

];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DonationsRoutingModule { }
