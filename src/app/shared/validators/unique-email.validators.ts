import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class uniqueEmailValidators{
    static uniqueEmail(control : AbstractControl) :Promise<ValidationErrors|null> | Observable <ValidationErrors|null> {
            // const currentEmailId =control.value;
            // const existingEmailRegistered = [
            //     'abhisahebpatil@gmail.com',
            //     'akale@gmail.com',
            // ];
            // return new Observable((observer:any)=>{
            //     setTimeout(()=>{
            //        if (existingEmailRegistered.includes(currentEmailId)) {
            //         observer.next({uniqueEmail:true});
            //         observer.complete();
            //        }else{
            //         observer.next(null);
            //         observer.complete();
            //        }
            //     },10000)
            // })

            //Promise
            const currentEmailId =control.value;
            const existingEmailRegistered = [
                'abhisahebpatil@gmail.com',
                'akale@gmail.com',
            ];
            return new Promise((resolve)=>{
               setTimeout(()=>{
               if(existingEmailRegistered.includes(currentEmailId)){
                   resolve({uniqueEmail:true})
               }else{
                      resolve (null)
               }
               },10000)
            });
    }
}