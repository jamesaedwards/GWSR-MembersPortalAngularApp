import { NgModule } from '@angular/core';
import { JoinHomeComponent } from './join-home/join-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmSuccessComponent } from './confirm-success/confirm-success.component';

const routes: Routes = [
  { path: '', component: JoinHomeComponent },
  { path: 'success', component: ConfirmSuccessComponent}
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JoinRoutingModule { }
