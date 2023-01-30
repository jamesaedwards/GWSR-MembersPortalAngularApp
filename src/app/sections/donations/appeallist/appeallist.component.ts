import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DonateService } from '../donate.service';
import { IAppealDTO } from 'src/app/models/IAppealDTO';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-appeallist',
  templateUrl: './appeallist.component.html',
  styleUrls: ['./appeallist.component.scss']
})
export class AppeallistComponent implements OnInit {

  constructor(private donateService: DonateService) { }

@Output() OnAppealSelect = new EventEmitter<number>();
  ngOnInit(): void {
    this.donateService.getAllAppeals().subscribe({
      next: (r) => {
        this.appeals = r;
        this.loading = false;
      },
      error: (e) =>{
        alert('Sorry, could not get the current list of appeals. Please try again later. ');
        this.loading = false;
      }
    })

  }
  loading = true;
setSelectedAppeal(appeal: IAppealDTO){
  this.appealSelected = appeal.id;
  this.OnAppealSelect.emit(appeal.id);
  console.log("Appeal Selected - " + appeal.id);
}
setGeneralDonation(){
  this.makeGeneralDonation = true;
  this.OnAppealSelect.emit(0);
}
showAppealSelection(){
  if(this.makeGeneralDonation===true) return false;
  if(this.appealSelected) return false;
  return true;
}
getSelectedAppeal(){
  if(this.makeGeneralDonation ===true){
    return "General Donation";
  }
  return this.appeals.find(i=>i.id == this.appealSelected)?.name
}
reset(){
  this.appealSelected = undefined;
  this.makeGeneralDonation = false;
}
  appeals: IAppealDTO[] = [];
  appealSelected: number | undefined;
makeGeneralDonation: boolean = false;
}
