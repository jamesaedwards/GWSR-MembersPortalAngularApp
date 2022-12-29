import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalSettings } from '../GlobalSettings';
import { IContactQuery } from '../models/IContactQuery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }
  baseUrl: string = GlobalSettings.baseApiUrl;

showLoading: boolean = false;
messageSent: boolean= false;

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    membershipNumber: new FormControl(''),
    postcode: new FormControl(''),
    contactPhoneNumber: new FormControl(''),
    message: new FormControl('', [Validators.required])
  });

  onSubmit(){
    
    if(this.contactForm.valid === false){
      alert('');
      return;
    }
    this.showLoading  = true;
    let dto: IContactQuery = {
      Name: this.contactForm.get("name")?.value,
      Email:this.contactForm.get("email")?.value,
      MembershipNumber:  this.contactForm.get("membershipNumber")?.value,
      Postcode: this.contactForm.get("postcode")?.value,
      Message: this.contactForm.get("message")?.value,
      ContactPhoneNumber: this.contactForm.get("contactPhoneNumber")?.value,
    }
    this.http.post(this.baseUrl + 'contact',dto).subscribe({
      next: r=> {
        this.contactForm.reset();
        this.messageSent = true;
        this.showLoading  = false;
      },
      error: e=> {
        alert('Error sending your message. Please try again later.');
        this.showLoading  = false;

      },

    });

  }
}
