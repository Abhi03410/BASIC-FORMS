import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NoSpaceValidator } from '../shared/validators/no-space.validators';
import { uniqueEmailValidators } from '../shared/validators/unique-email.validators';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrl: './three.component.css'
})
export class ThreeComponent implements OnInit {
  myReactiveForm: any;
  myTableObj = [
    {
      firstName: 'abhi',
      lastName: 'kale',
      userContactDetails: {
        contactNumber: '70830701289',
        emailAddress: 'akale0774@gmail.com'
      }
    }
  ]
  formbuilder: any;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    //*** FormGroup ***/

    // this.myReactiveForm = new FormGroup({
    //   firstName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   userContactDetails: new FormGroup({
    //     contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    //     emailAddress: new FormControl('', [Validators.required, Validators.email]),
    //   }),
    //   // knownLanguages: new FormArray([new FormControl('')]),
    //   knownLanguages: new FormArray([
    //     new FormGroup({
    //       language: new FormControl(null),
    //       taughtBy: new FormControl(null),
    //       monthsOfExp: new FormControl(null),
    //     })
    //   ])
    // });
    //  console.log(this.myReactiveForm);  

    //*** FormBuilder ***/
    this.myReactiveForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.required),
      lastName: this.formBuilder.control(''),
      userContactDetails:this.formBuilder.group({
        contactNumber: this.formBuilder.control('', [Validators.required, Validators.minLength(10)]),
        emailAddress:this.formBuilder.control('', [Validators.required,NoSpaceValidator.noSpace],uniqueEmailValidators.uniqueEmail)
      }),
      knownLanguages:this.formBuilder.array([
        this.formBuilder.group({
          language:this.formBuilder.control(''),
          taughtBy:this.formBuilder.control(''),
          monthsOfExp:this.formBuilder.control(''),
        })
      ])
    })
  }
  onSubmit() {
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    this.myTableObj.push(this.myReactiveForm.value);
    // this.myReactiveForm.reset()
  }
  addNewLanguageControl() {
    this.myReactiveForm.get('knownLanguages').push(new FormControl(''))
  }
  addNewLanguageGroup() {
    // this.myReactiveForm.get('knownLanguages').push(new FormGroup({
    //   language: new FormControl(null),
    //   taughtBy: new FormControl(null),
    //   monthsOfExp: new FormControl(null),
    // }))
    this.myReactiveForm.get('knownLanguages').push(this.formBuilder.group({
      language:this.formBuilder.control(''),
      taughtBy:this.formBuilder.control(''),
      monthsOfExp:this.formBuilder.control(''),
    }))
  }
  setDefaultValue() {
    const myDefaultVal = {
      "firstName": "Aegon",
      "lastName": "Targerian",
      "userContactDetails": {
        "contactNumber": "4564445896",
        "emailAddress": "aegon.targerian.144@gmail.com"
      },
      "knownLanguages":[
        {
          "language":"HTML",
          "taughtBy":"Prashant Sir",
          "monthsOfExp":"7"
        },
        {
          "language":"css",
          "taughtBy":"Prashant Sir",
          "monthsOfExp":"5"
        },
        {
          "language":"js",
          "taughtBy":"Devendra Sir",
          "monthsOfExp":"5"
        }
      ]
    };
    // console.log(myDefaultVal.knownLanguages.length); 
    myDefaultVal.knownLanguages.forEach((lang:any,index:number)=>{
      if (myDefaultVal.knownLanguages.length !== this.myReactiveForm.get('knownLanguages').controls.length) {
        this.addNewLanguageGroup();
      }
    })
    this.myReactiveForm.setValue(myDefaultVal);
  }
  setSpecificDefaultValue(){
    const myValue = {
      "firstName": "John",
      "lastName": "Targerian",
      "userContactDetails": {
        "contactNumber": "4564445896",
        "emailAddress": "aegon.targerian.144@gmail.com"
      },
      "knownLanguages":[
        {
          "language":"HTML",
          "taughtBy":"Prashant Sir",
          "monthsOfExp":"7"
        },
        {
          "language":"css",
          "taughtBy":"Prashant Sir",
          "monthsOfExp":"5"
        },
        {
          "language":"js",
          "taughtBy":"Devendra Sir",
          "monthsOfExp":"5"
        }
      ]
    };
    myValue.knownLanguages.forEach((lang:any,index:number)=>{
      if (myValue.knownLanguages.length !== this.myReactiveForm.get('knownLanguages').controls.length) {
        this.addNewLanguageGroup();
      }
    })
    this.myReactiveForm.patchValue(myValue);
  }
}
//touched and invalid
//submitted and invalid
