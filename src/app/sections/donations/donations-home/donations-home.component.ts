import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateDonationRequestDTO } from 'src/app/models/ICreateDonationRequestDTO';
import { DonateService } from '../donate.service';

@Component({
  selector: 'app-donations-home',
  templateUrl: './donations-home.component.html',
  styleUrls: ['./donations-home.component.scss']
})
export class DonationsHomeComponent implements OnInit {

  constructor(private donateService: DonateService) { }

  ngOnInit(): void {
  }

getStep(){

if(this.request.address !=undefined && this.request.address?.addressLine1 !== ''){
  return 5;
}
if(this.request.canGiftAid === false && this.completedPersonDetails===false){
  return 3;
}
  if(this.request.canGiftAid === false){
    return 5;
  }
  if(this.completedPersonDetails==true){
    return 4
  }
  if(this.request.canGiftAid){
    return 3
  }
  if(this.request.donationAmount){
    return 2
  }
  if(this.request.appealId >= 0){
    return 1;
  }
  return 0;
}

donationAmountForm = new FormGroup({
  donationAmount: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000)])
});
 form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),

  });
setDonationAmount(amount: number){
  this.donationAmountForm.controls['donationAmount'].setValue(amount);
}
saveDonationAmount(){
  this.request.donationAmount = this.donationAmountForm.get('donationAmount')?.value;
}
  onPersonalDetailsSave(){
    this.request.firstName = this.form.get('firstName')?.value;
    this.request.lastName = this.form.get('lastName')?.value;
    this.request.email = this.form.get('email')?.value;
    this.completedPersonDetails = true;
  }
loading: boolean = false;
completedPersonDetails:boolean = false;
  request: ICreateDonationRequestDTO = {
    firstName: '',
    lastName: '',
    email: '',
    address: undefined,
    isExistingMember: false,
    selectedPaymentMethod: 0,
    donationAmount: 0,
    canGiftAid: undefined,
    appealId: -1,
    matchedPersonGuid: undefined
  }

createDonation(){
  this.loading = true;
  this.donateService.postNewDonation(this.request).subscribe({
    next: (r) => {
      console.log(r);
      window.location.href = r.paymentUrl;
    },
    error: (e) =>{
      console.log(e);
      this.loading = false;
      alert('Sorry, we could not process your donation request. Please try again later');
    }
  })
}
}
