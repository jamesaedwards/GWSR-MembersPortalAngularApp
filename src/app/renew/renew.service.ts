import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalSettings } from '../GlobalSettings';
import { INewMembershipResponseDTO } from '../models/INewMembershipResponseDTO';
import { IRenewRequestDTO } from '../models/IRenewRequestDTO';
import { IStartRenewalResponseDTO } from '../models/IStartRenewalResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class RenewService {

  constructor(private http:HttpClient) { }
  baseUrl: string = GlobalSettings.baseApiUrl;

  getRenewal(seccode: string){
    console.log(seccode);
    return this.http.get<IStartRenewalResponseDTO>(this.baseUrl + "renew/identity/" + seccode);
  }
  completeRenewal(renDTO: IRenewRequestDTO){
    return this.http.post<INewMembershipResponseDTO>(this.baseUrl + "renew/HandleRenew", renDTO);
  }
  requestRenewalSent(email: string){
    return this.http.post(this.baseUrl + "renew/RequestSecurityEmail", { email: email});
  }
}
 