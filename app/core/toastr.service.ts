import { Injectable } from '@angular/core';

declare let toastr : any;

//Alternative way to use toastr typings file i.e d.ts file 
// ref: http://stackoverflow.com/questions/34870980/unable-to-import-toastr-module-with-angular-2
 
 
@Injectable()
export class ToastrService{
  constructor() {
    toastr.options = { positionClass: 'toast-bottom-right', }    
  }

 success(message: string, title?: string) {
    toastr.success(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}