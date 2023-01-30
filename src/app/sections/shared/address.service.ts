import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalSettings } from 'src/app/GlobalSettings';
import { IAddressLookupSuggestion } from 'src/app/models/IAddressLookupSuggestion';
import { IPostAddress } from 'src/app/models/IPostAddress';


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
