import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { IAddressLookupSuggestion } from 'src/app/models/IAddressLookupSuggestion';
import { IPostAddress } from 'src/app/models/IPostAddress';
import { AddressService } from '../address.service';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})


export class AddressFormComponent implements OnInit {

  constructor(private address: AddressService) { }
  ngOnInit(): void {
    if(this.setAddress){
      this.addressForm.get('addressLine1')?.setValue(this.setAddress.addressLine1);
      this.addressForm.get('addressLine2')?.setValue(this.setAddress.addressLine2);
      this.addressForm.get('addressLine3')?.setValue(this.setAddress.addressLine3);
      this.addressForm.get('town')?.setValue(this.setAddress.town);
      this.addressForm.get('county')?.setValue(this.setAddress.county);
      this.addressForm.get('postCode')?.setValue(this.setAddress.postCode);
      this.addressForm.get('county')?.setValue(this.setAddress.country);
      this.step=2;
    }
  }

 addressForm = new FormGroup({
  addressLine1: new FormControl('', Validators.required),
  addressLine2: new FormControl(''),
  addressLine3: new FormControl(''),
  town: new FormControl('', Validators.required),
  county: new FormControl(''),
  postCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(9)]),
  country: new FormControl('United Kingdom')
 });

@Input() personId: string;
@Input() setAddress: IPostAddress;

@Output() onFormComplete = new EventEmitter<IPostAddress>();
step: number = 1;

/* lookupForm = new FormGroup({
  search: new FormControl('', [Validators.required,Validators.minLength(6)])
}) */

lookupSearch: string;
lookupDone: boolean = false;
lookupSuggestions: IAddressLookupSuggestion[] = [];
 


handleAddressLookup(){

  if(this.lookupSearch.length < 5) return;
 this.address.lookup(this.lookupSearch).subscribe(r=> {
  this.lookupSuggestions = r;
 })
}
handleLookupSelect(id:string){
  this.address.getAddress(id).subscribe(r=> {
    console.log(r);
    this.addressForm.get('addressLine1')?.setValue(r.addressLine1);
    this.addressForm.get('addressLine3')?.setValue(r.addressLine2);
    this.addressForm.get('addressLine3')?.setValue(r.addressLine3);
    this.addressForm.get('town')?.setValue(r.town);
    this.addressForm.get('county')?.setValue(r.county);
    this.addressForm.get('postCode')?.setValue(r.postCode);
    this.addressForm.get('country')?.setValue(r.country);
    this.step = this.step +1;
  })
}
 submit(){
  if(this.addressForm.valid ==false){
    alert('Please check the details you have entered. More or more field are invalid.');
    return;
  }
  let address: IPostAddress = {
    addressLine1: this.addressForm.get('addressLine1')?.value,
    addressLine2: this.addressForm.get('addressLine2')?.value,
    addressLine3: this.addressForm.get('addressLine3')?.value,
    town: this.addressForm.get('town')?.value,
    county: this.addressForm.get('county')?.value,
    postCode: this.addressForm.get('postCode')?.value,
    country: this.addressForm.get('country')?.value,
    id: ''
  };
  this.onFormComplete.emit(address);
  }



}
