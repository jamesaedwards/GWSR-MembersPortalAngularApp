import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDeclarations } from 'src/app/models/IDeclarations';
import { TarrifService } from '../tarrif.service';

@Component({
  selector: 'app-membership-declarations',
  templateUrl: './membership-declarations.component.html',
  styleUrls: ['./membership-declarations.component.scss']
})
export class MembershipDeclarationsComponent implements OnInit {

  constructor(private tarrifService:TarrifService ) { }

@Input() declarations: IDeclarations;
@Input() selectedTarrifBaseRate: number;
@Output() declarationsChange = new EventEmitter<IDeclarations>();

  ngOnInit(): void {
    this.selectedTarrifBaseRate = this.tarrifService.selectedTarrif.rate;
  }
  getTotalPayment(){
    return this.selectedTarrifBaseRate + (this.declarations.additonalDonation > 0 ? this.declarations.additonalDonation : 0);
  }
  getDonation(){
    if(this.declarations.additonalDonation > 0) return this.declarations.additonalDonation;
    return 0;
  }
}
