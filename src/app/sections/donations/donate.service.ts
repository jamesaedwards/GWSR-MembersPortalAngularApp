import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalSettings } from 'src/app/GlobalSettings';
import { IAppealDTO } from 'src/app/models/IAppealDTO';
import { ICreateDonationRequestDTO } from 'src/app/models/ICreateDonationRequestDTO';
import { INewMembershipResponseDTO } from 'src/app/models/INewMembershipResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  baseUrl: string = GlobalSettings.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllAppeals(){
    return this.http.get<IAppealDTO[]>(this.baseUrl + "donations");
  }

  postNewDonation(dto: ICreateDonationRequestDTO){
    return this.http.post<INewMembershipResponseDTO>(this.baseUrl + "donations", dto);
  }

  request: ICreateDonationRequestDTO = {
    firstName: '',
    lastName: '',
    email: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      town: '',
      county: '', 
      postCode: '',
      country: '',
      id: ''
    },
    isExistingMember: false,
    selectedPaymentMethod: 0,
    donationAmount: 0,
    canGiftAid: false,
    appealId: -1,
    matchedPersonGuid: ''
  }
}
