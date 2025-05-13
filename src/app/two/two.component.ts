import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {
  myReactiveForm: any;
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      userContactDetails: new FormGroup({
        contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        emailId: new FormControl('', Validators.required),
      }),
      // knownLanguages: new FormArray([
      //   new FormControl('')
      // ]),
      knowLanguages:new FormArray([
        new FormGroup({
          language:new FormControl(null),
          taughtBy:new FormControl(null),
          monthsOfExp:new FormControl(null),
        })
      ])
    })
  }
  aadNewLanguageGroup(){
    this.myReactiveForm.get('knowLanguages').push(new FormGroup({
      language:new FormControl(null),
      taughtBy:new FormControl(null),
      monthsOfExp:new FormControl(null),
    }))
  }
  addNewLanguageControl() {
    // this.myReactiveForm.controls.knownLanguages
    this.myReactiveForm.get('knownLanguages').push(new FormControl(''))
  }
  onSubmit() {
    this.myReactiveForm.
    // console.log('onSubmit Triggered >>>', this.myReactiveForm.value);
    this.myReactiveForm.reset();
  }
  setDefaultValue() {
    this.myReactiveForm.setValue({
      "firstName": "Aegon",
      "lastName": "Targerian",
      "userContactDetails": {
        "contactNumber": "4564445896",
        "emailId": "aegon.targerian.144@gmail.com"
      }
    });
  }
  setSpecificDefaultValue() {
    this.myReactiveForm.patchValue({
      "firstName": "John",
      "userContactDetails": {
        "contactNumber": "9999999999",
      }
    })
  }
}
