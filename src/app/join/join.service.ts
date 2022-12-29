import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBasicPersonDetails } from '../models/IBasicPersonDetails';
import { ICreateMembershipDTO } from '../models/ICreateMembershipDTO';
import { INewMembershipRequestDTO } from '../models/INewMembershipRequestDTO';
import { IPostAddress } from '../models/IPostAddress';
import { AddressService } from '../shared/address.service';
import { GlobalSettings } from '../GlobalSettings';
import { INewMembershipResponseDTO } from '../models/INewMembershipResponseDTO';

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


  public requestDTO: INewMembershipRequestDTO;
}
