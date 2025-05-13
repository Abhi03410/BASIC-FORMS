import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NoSpaceValidator } from '../shared/validators/no-space.validators';
import { uniqueEmailValidators } from '../shared/validators/unique-email.validators';


@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrl: './four.component.css'
})
export class FourComponent implements OnInit{
  constructor(private formBuilder:FormBuilder){}
myReactForm:any;
ngOnInit(): void {
    this.myReactForm = this.formBuilder.group({
      emailId:this.formBuilder.control('',[Validators.required,NoSpaceValidator.noSpace],uniqueEmailValidators.uniqueEmail)
    })
}
onSubmit(){
  console.log('Triggered >>>',this.myReactForm);
  console.log('Triggered >>>',this.myReactForm.value);
}
}

// [Validators.require,EmailValidator.emailVal]