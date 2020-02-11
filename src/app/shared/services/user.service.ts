import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../utils/config.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';
import { Userregisteration } from '../models/userregisteration.interface';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService extends BaseService {


  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  // Observable navItem source
  // tslint:disable-next-line:variable-name
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

    register(email: string, password: string, firstName: string, lastName: string, location: string) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });


    // tslint:disable-next-line:object-literal-shorthand
    const options = new RequestOptions({ headers: headers });



    return this.http.post(this.baseUrl + '/Account', body, options)
      .pipe(map(() => true))
      .pipe(catchError(this.handleError));
  }

   login(userName, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/auth/login',
      JSON.stringify({ userName, password }), { headers }
      )
      .pipe(map(res => res.json()))
      .pipe(map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      }))
      .pipe(catchError(this.handleError));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  facebookLogin(accessToken: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify({ accessToken });
    return this.http
      .post(
      this.baseUrl + '/externalauth/facebook', body, { headers })
      .pipe(map(res => res.json()))
      .pipe(map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      }))
      .pipe(catchError(this.handleError));
  }
}
