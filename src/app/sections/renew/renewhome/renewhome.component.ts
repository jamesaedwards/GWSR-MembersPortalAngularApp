import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeclarations } from 'src/app/models/IDeclarations';
import { IStartRenewalResponseDTO } from 'src/app/models/IStartRenewalResponseDTO';

import { RenewService } from '../renew.service';
import { IRenewRequestDTO } from 'src/app/models/IRenewRequestDTO';
import { TarrifService } from '../../shared/tarrif.service';

@Component({
  selector: 'app-renewhome',
  templateUrl: './renewhome.component.html',
  styleUrls: ['./renewhome.component.scss'],
})
export class RenewhomeComponent implements OnInit {
  step: number = 1;
  loading: boolean = false;
  selectedPaymentMethod: number = 0;
  renewalData: IStartRenewalResponseDTO;
  tarrifSelectedId: number = 0;
  declarations: IDeclarations = {
    termsAccepted: true,
    additonalDonation: 0,
    additonalDonationRepeatOnRenewal:false,
    giftAidDecl: '',
    cornishman: 0
  };
  renewalDataDTO: IRenewRequestDTO = {
    additionalDonation: 0,
    giftAidDeclaration: false,
    securityCode: 0,
    repeatDonationOnRenewal: false,
    cornishman: 0,
    membershipTarrifId: 0,
    selectPaymentMethod: 0,
    membersComments: ''
  }
  ngOnInit(): void {

    
  }

  canSendRenew(){
    return this.declarations.giftAidDecl !=='' && this.selectedPaymentMethod !==0;
  }

  getSelectedTarrifDescription(){
    return this.tarrifsService.selectedCategory.name + " - " + this.tarrifsService.selectedTarrif.description
   }

   sendRenewal(){
    this.renewalDataDTO.additionalDonation = this.declarations.additonalDonation;
    this.renewalDataDTO.cornishman = this.declarations.cornishman;
    this.renewalDataDTO.membershipTarrifId = this.tarrifsService.getSelectedTarrifId();
    this.renewalDataDTO.securityCode = this.renewalData.renewalSecurityCode;
    this.renewalDataDTO.selectPaymentMethod = this.selectedPaymentMethod;
    this.renewalDataDTO.giftAidDeclaration = this.declarations.giftAidDecl === 'true' ? true : false;
console.log(this.renewalDataDTO);
    this.loading = true;
    this.renewalService.completeRenewal(this.renewalDataDTO).subscribe({
      next: (r) => {
        this.loading = false;
        window.location.href = r.paymentUrl;
      },
      error: (e) =>{
        alert("Sorry, There was an error and we couldn't process your renewal at this time." + e);
        this.loading = false;
      }
    });
   }

constructor(private tarrifsService: TarrifService, private renewalService: RenewService, private router: ActivatedRoute ) {}
  
}
