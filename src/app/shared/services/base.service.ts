import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  protected handleError(error: any) {
    // tslint:disable-next-line:prefer-const
    let applicationError = error.headers.get('Application-Error');

    // either applicationError in header or model error in body
    if (applicationError) {
      return Observable.throw(applicationError);
    }

    // tslint:disable-next-line:no-inferrable-types
    let modelStateErrors: string = '';
    // tslint:disable-next-line:prefer-const
    let serverError = error.json();

    if (!serverError.type) {
      // tslint:disable-next-line:prefer-const
      for (let key in serverError) {
        // tslint:disable-next-line:curly
        if (serverError[key])
          modelStateErrors += serverError[key] + '\n';
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return Observable.throw(modelStateErrors || 'Server error');
  }
}
