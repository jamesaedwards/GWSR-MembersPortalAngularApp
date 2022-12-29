import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-please-waitpopup',
  templateUrl: './please-waitpopup.component.html',
  styleUrls: ['./please-waitpopup.component.scss']
})
export class PleaseWaitpopupComponent implements OnInit {

  constructor() { }

  @Input() infotext: string  ="We are processing your request.";

  ngOnInit(): void {
  }

}
