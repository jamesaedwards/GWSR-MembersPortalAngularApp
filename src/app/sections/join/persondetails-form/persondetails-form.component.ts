import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBasicPersonDetails } from 'src/app/models/IBasicPersonDetails';


@Component({
  selector: 'app-persondetails-form',
  templateUrl: './persondetails-form.component.html',
  styleUrls: ['./persondetails-form.component.scss']
})
export class PersondetailsFormComponent implements OnInit {

  signupForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl(''),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl(''),
    mobileNumber: new FormControl(''),
    ageCategory: new FormControl(0, [Validators.required])
  });
  

@Output() onFormCompleted = new EventEmitter<IBasicPersonDetails>();
@Input() formData: IBasicPersonDetails;
  constructor() {

   }

  ngOnInit(): void {
    console.log("person form fired");
     if(this.formData){
      console.log("person form data in.")
      this.signupForm.get('title')?.setValue(this.formData.title);
      this.signupForm.get('firstName')?.setValue(this.formData.firstName);
      this.signupForm.get('middleName')?.setValue(this.formData.middleName);
      this.signupForm.get('lastName')?.setValue(this.formData.lastName);
      this.signupForm.get('email')?.setValue(this.formData.email);
      this.signupForm.get('phoneNumber')?.setValue(this.formData.landLineNo);
      this.signupForm.get('mobileNumber')?.setValue(this.formData.mobileNumber);
      
    } 
  }
  onSubmit(){
   if(this.signupForm.valid){
  let dto: IBasicPersonDetails = {
      title: this.signupForm.get("title")?.value,
      firstName: this.signupForm.get("firstName")?.value,
      middleName: this.signupForm.get("middleName")?.value,
      lastName: this.signupForm.get("lastName")?.value,
      email: this.signupForm.get("email")?.value,
      landLineNo: this.signupForm.get('phoneNumber')?.value,
      mobileNumber : this.signupForm.get('mobileNumber')?.value,
      ageCategory: this.signupForm.get('ageCategory')?.value
    };

      this.onFormCompleted.emit(dto);
      this.signupForm.reset();
   }
   else {
    alert('Please check the details you have entered');
   }
  }
}
