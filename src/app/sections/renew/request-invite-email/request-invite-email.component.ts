import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RenewService } from '../renew.service';

@Component({
  selector: 'app-request-invite-email',
  templateUrl: './request-invite-email.component.html',
  styleUrls: ['./request-invite-email.component.scss'],
})
export class RequestInviteEmailComponent implements OnInit {
  constructor(private renewService: RenewService) {}

  isSent: boolean = false;
  ngOnInit(): void {}
  requestForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  send() {
    if(this.requestForm.valid == false){
      return;
    }
    this.renewService
      .requestRenewalSent(this.requestForm.get('email')?.value)
      .subscribe({
        next: r=> this.isSent = true,
        error: e=> alert('Sorry, a server error occured. Please try again later.')
      });
  }
}
