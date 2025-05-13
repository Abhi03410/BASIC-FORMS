import { Component, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  @ViewChild('myForm') myFormObj:any;
  constructor(){}
  onSubmit(param:any){
    console.log(param.value);
    // param.resetForm();
    //or
    this.myFormObj.resetForm();
  }
  setDefaultValue(){
    this.myFormObj.setValue({
      "firstName":'Mohit',
      "lastName":'Kale',
      'userContactDetails':{
        "ContactNumber":'34739879857',
        "emailId":'mk@gmail.com',
      },
      "UserBankDetails":{
        "bankName":'ICICI',
        "accountNumber":'435980345835',
        "ifscCode":'ICI0000546',
      }
    })
  }
}

//task
//Contact Number Should be at Least 10 Digits Long! You have entered 3 digits and still have to enter  7 more digits to make it valid
//myForm.controls.UserBankDetails.controls.