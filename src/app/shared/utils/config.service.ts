import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:variable-name
  _apiURI: string;

  constructor() {
      this._apiURI = 'https://localhost:44309/api';
   }

   getApiURI() {
       return this._apiURI;
   }
}
