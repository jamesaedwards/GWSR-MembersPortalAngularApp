import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalSettings } from 'src/app/GlobalSettings';
import { ITarrif } from 'src/app/models/ITarrif';
import { ITarrifCategory } from 'src/app/models/ITarrifCategory';


@Injectable({
  providedIn: 'root'
})
export class TarrifService {
  
  baseUrl= GlobalSettings.baseApiUrl;
  constructor(private http: HttpClient) { }

  tarrifSelected: number;

selectedTarrif: ITarrif;
selectedCategory: ITarrifCategory;


  getTarrifs(){
   return this.http.get<ITarrifCategory[]>(this.baseUrl + 'tarrif');
  }
  setCategory(cat:ITarrifCategory){
    this.selectedCategory = cat;
  }
  setTarrif(tar: ITarrif){
    this.selectedTarrif = tar;
  }
  getSelectedTarrifId(){
    return this.selectedTarrif.id;
  }
  getSelectedTarrifSeats(){
    return this.selectedCategory.seats;
  }
}
