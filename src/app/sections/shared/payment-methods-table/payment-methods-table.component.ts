import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-payment-methods-table',
  templateUrl: './payment-methods-table.component.html',
  styleUrls: ['./payment-methods-table.component.scss']
})
export class PaymentMethodsTableComponent implements OnInit {

  constructor() { }

  selectedPaymentMethod: number = 0; //4 = Direct Debit, 5 = Credit Card.

  @Output() onMethodSelected = new EventEmitter<number>();

  ngOnInit(): void {
  }
  
  setupDirectDebit(){
  
    this.selectedPaymentMethod = 4;
    this.onMethodSelected.emit(4);
   }
  setupCardPayment(){
    this.selectedPaymentMethod = 5;
    this.onMethodSelected.emit(5);
  }
}
