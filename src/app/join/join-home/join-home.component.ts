import { Component, OnInit } from '@angular/core';
import { IBasicPersonDetails } from 'src/app/models/IBasicPersonDetails';
import { IDeclarations } from 'src/app/models/IDeclarations';
import { INewMembershipRequestDTO } from 'src/app/models/INewMembershipRequestDTO';
import { IPostAddress } from 'src/app/models/IPostAddress';
import { ITarrifSelect } from 'src/app/models/ITarrifSelect';
import { ITarrifCategory } from '../../models/ITarrifCategory';
import {TarrifService } from '../../shared/tarrif.service';
import { JoinService } from '../join.service';


@Component({
  selector: 'app-join-home',
  templateUrl: './join-home.component.html',
  styleUrls: ['./join-home.component.scss']
})
export class JoinHomeComponent implements OnInit {

  step: number = 1;
  tarrifs: ITarrifCategory[];

  selectedCategory: number = 0;
  selectedTarrif: number = 0;
   selectedTarrifDescription: string = "";
  selectedTarrifSeats: number;
  selectedTarrifBaseRate: number;
  selectedPaymentMethod: number = 0; //4 = Direct Debit, 5 = Credit Card.
  personGuid: string;
  declarations: IDeclarations = {
    termsAccepted: true,
    additonalDonation: 0,
    additonalDonationRepeatOnRenewal:false,
    giftAidDecl: '',
    cornishman: 0
  };
  cornishman: number;

  personBasicDetails: IBasicPersonDetails;
  additionalSeatHolders: IBasicPersonDetails[] = [];
  address: IPostAddress;

  loading: boolean = true;

  constructor(private tarrifsService: TarrifService, private joinService: JoinService) { 
    this.tarrifs = [];
  }

 getSelectedTarrifDescription(){
  return this.tarrifsService.selectedCategory.name + " - " + this.tarrifsService.selectedTarrif.description
 }

  ngOnInit(): void {
    this.tarrifsService.getTarrifs().subscribe({
      next: (r)=> {
      this.tarrifs = r;
      this.loading = false;
      error: () => this.loading = false;
    }})
  }
  SetTarrif(selectedTarrif: ITarrifSelect){
    // this.selectedTarrif =selectedTarrif.tarrif;
    // let thisCategory = this.tarrifs.find(i=>i.id == selectedTarrif.category);
    // this.selectedTarrifDescription = thisCategory?.name + " - " + thisCategory?.tarrifs.find(r=>r.id == selectedTarrif.tarrif)?.description;
    // this.selectedTarrifBaseRate = thisCategory?.tarrifs.find(r=>r.id == selectedTarrif.tarrif)?.rate!;

    this.step = 2;
    this.toTop()
  }
  addAdditionalSeat(additionalPerson:IBasicPersonDetails){
    this.additionalSeatHolders.push(additionalPerson);
  }
  resetTarrif(){
    this.selectedTarrifDescription="";
    this.selectedTarrif = 0;
    this.step=1;
    this.toTop();
  }
  getTarrifSeats(){
    return this.tarrifsService.getSelectedTarrifSeats();
  }
  setPersonalDetails(person: IBasicPersonDetails){
    this.toTop();
this.personBasicDetails = person;
if(this.getTarrifSeats() > 1){
  this.step = 3;
  return;
}
this.step = 4;


  }
  setAddress(ad:IPostAddress){
    this.address = ad;
    this.address.id = '00000000-0000-0000-0000-000000000000';
    this.step=5;
    this.toTop();
  }

 
/* 
async  registerMember(){
   this.loading = true;
    await this.createPerson().then(async () => {
     await this.createAddress().then(async () => {
      await this.createMembership();
     }).catch((e) => {
        alert(e);
     }).catch((e) => {
      alert(e);
     });
    }).catch((e) => {
      alert(e);
    });

  }
async createPerson(){
  this.joinService.createPerson(this.personBasicDetails).subscribe(r => {
    this.personGuid = r;
    this.address.id = r;
    return r;
  }).unsubscribe();
}
async createAddress(){
  setTimeout(() => { 
    this.joinService.createAddress(this.address).subscribe(r=> {
      return;
    }).unsubscribe();
   }, 500);

} */


async createMembership(){
 
  this.loading = true; 
  let requestDTO: INewMembershipRequestDTO = {
    membership: {
      selectedPaymentMethod: this.selectedPaymentMethod,
      personId: this.personGuid,
      additionalDonation: this.declarations.additonalDonation,
      repeatDonationOnRenewal: this.declarations.additonalDonationRepeatOnRenewal,
      jointHolders: this.additionalSeatHolders,
      membershipTarrifId: this.tarrifsService.selectedTarrif.id,
      giftAidDeclaration: this.declarations.giftAidDecl === 'true' ? true : false,
      cornishman: this.cornishman 
    },
    person: this.personBasicDetails,
    address: this.address
  }

  this.joinService.createMembership(requestDTO).subscribe({
    next: (r) => {
      this.loading = false;
      this.step = 7;
      window.location.href = r.paymentUrl;
      return;
    },
    error: (e) => {
      alert("We are sorry, but we couldn't create your membership at this time. Please try again later.");
      this.loading = false;
    }

  })


}

toTop() {
  window.scroll(0, 0);
}
}
