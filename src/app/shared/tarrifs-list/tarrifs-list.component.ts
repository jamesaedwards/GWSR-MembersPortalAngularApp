import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITarrif } from 'src/app/models/ITarrif';
import { ITarrifCategory } from 'src/app/models/ITarrifCategory';
import { ITarrifSelect } from 'src/app/models/ITarrifSelect';
import { TarrifService } from '../tarrif.service';

@Component({
  selector: 'app-tarrifs-list',
  templateUrl: './tarrifs-list.component.html',
  styleUrls: ['./tarrifs-list.component.scss']
})
export class TarrifsListComponent implements OnInit {

  constructor(private tarrifService: TarrifService) { }

@Output() onTarrifSelect = new EventEmitter<ITarrifSelect>();
tarrifs: ITarrifCategory[];
selectedCategory: number;
selectedTarrif: number;

setTarrif(category:ITarrifCategory, tarrif:ITarrif){
  this.tarrifService.setCategory(category);
  this.tarrifService.setTarrif(tarrif);
  
  this.onTarrifSelect.emit({
    category: this.selectedCategory,
    tarrif: this.selectedTarrif,
    numOfSeats: this.tarrifs.find(r=>r.id == this.selectedTarrif)?.seats!,
  });

}

  ngOnInit(): void {
    this.tarrifService.getTarrifs().subscribe ({
      next: (r)=> {
      this.tarrifs = r
    },
    error: (e) => {
      alert('Sorry, there was an error getting server data');
    }
  });
  }

}
