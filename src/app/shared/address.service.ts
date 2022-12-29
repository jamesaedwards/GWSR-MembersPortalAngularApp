import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalSettings } from '../GlobalSettings';
import { IAddressLookupSuggestion } from '../models/IAddressLookupSuggestion';
import { IPostAddress } from '../models/IPostAddress';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }
  baseUrl= GlobalSettings.baseApiUrl;

lookup(search: string){
 return this.http.get<IAddressLookupSuggestion[]>(this.baseUrl + 'address/lookup/' + search);
}
getAddress(id: string){
  return this.http.get<IPostAddress>(this.baseUrl + 'address/' + id)
}

}
