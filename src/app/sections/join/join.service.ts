import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddressService } from '../shared/address.service';
import { GlobalSettings } from 'src/app/GlobalSettings';
import { IBasicPersonDetails } from 'src/app/models/IBasicPersonDetails';
import { IPostAddress } from 'src/app/models/IPostAddress';
import { INewMembershipRequestDTO } from 'src/app/models/INewMembershipRequestDTO';
import { INewMembershipResponseDTO } from 'src/app/models/INewMembershipResponseDTO';


@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor(private http: HttpClient) { }
  baseUrl: string = GlobalSettings.baseApiUrl;

  createPerson(person: IBasicPersonDetails){
    return this.http.post<string>(this.baseUrl + "Person", person);
  }
  createAddress(addre:IPostAddress){
    return this.http.post<IPostAddress>(this.baseUrl + "Person/AddAddress", addre);
  }
  createMembership(membData: INewMembershipRequestDTO){
    return this.http.post<INewMembershipResponseDTO>(this.baseUrl + "Membership", membData);
  }
 checkEmail(email: string){
  return this.http.get<boolean>(this.baseUrl + 'Person/CheckEmailAddress?email='+email);
 }

  public requestDTO: INewMembershipRequestDTO;
}
