import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IStartRenewalResponseDTO } from 'src/app/models/IStartRenewalResponseDTO';
import { RenewService } from '../renew.service';

@Component({
  selector: 'app-security-lookup',
  templateUrl: './security-lookup.component.html',
  styleUrls: ['./security-lookup.component.scss'],
})
export class SecurityLookupComponent implements OnInit {
  securityForm = new FormGroup({
    renewSecurityLett: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z]{2}$'),
    ]),
    renewSecurityCode1: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]),
    renewSecurityCode2: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]),
    renewSecurityCode3: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]),
  });
  securityFormError: string = '';
  securityForm2 = new FormGroup({
    securityCode: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength(17), Validators.pattern('^[A-Z]{2}[0-9]{12}$')])
  })


  getSecurityCode() {
    return (
      this.securityForm.get('renewSecurityLett')?.value +
      '-' +
      this.securityForm.get('renewSecurityCode1')?.value +
      this.securityForm.get('renewSecurityCode2')?.value +
      this.securityForm.get('renewSecurityCode3')?.value
    );
  }
  getSecurityCode2(){
    return this.securityForm2.get('securityCode')?.value.replace(/ /g,'');
  }

  renewalData: IStartRenewalResponseDTO;

  constructor(private renewService: RenewService,  private route: ActivatedRoute) {}

  @Output() showLoading = new EventEmitter();
  @Output() stopLoading = new EventEmitter();
  @Output() onRenewalStarted = new EventEmitter<IStartRenewalResponseDTO>();

  ngOnInit(): void {
    try{
      this.route.queryParams.subscribe(params => {
        this.securityForm2.get('securityCode')?.setValue(params['id'])
      }).unsubscribe();
      if(this.getSecurityCode2() !==''){
        console.log('Code is: ', this.getSecurityCode2());
        this.starRenewalProcess();
      }
    } catch(e) {}

   
  }

  starRenewalProcess() {
    console.log(this.getSecurityCode2());
    this.showLoading.emit();
    this.securityFormError = '';

    if (this.securityForm2.valid == false) {
      this.securityFormError =
        'Please check your security code, as it appears to be in the wrong format.';
        this.stopLoading.emit();
      return;
    }
    this.renewService.getRenewal(this.getSecurityCode2()).subscribe({
      next: (res) => {
        this.renewalData = res;
        this.showLoading.emit();
        this.onRenewalStarted.emit(res);
      },
      error: (er) => {
        console.log(er);
        this.securityFormError = er.error.message;
        this.stopLoading.emit();
      },
      complete: () => {
        this.stopLoading.emit();
      },
    });
  }

}
