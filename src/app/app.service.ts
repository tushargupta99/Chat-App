import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

// importing Observables
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
  private baseURL = 'https://chatapi.edwisor.com/api/v1';

  constructor(public http: HttpClient) {}

  // get the userInfo in LocalStorage
  public getUserInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  // set the userInfo in LocalStorage
  // here this function is expecting some data(which would be an object returned), we are converting that data into string using
  // stringify method
  public setUserInfoInLocalStorage( data ) {
    localStorage.setItem('userInfo' , JSON.stringify(data));
  }


  // Declaring the signupFunction function in the service
  public signupFunction(data) {
    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);
    // const myResponse = this.http.post(this.baseURL + 'users/signup', params);
    const myResponse = this.http.post(`${this.baseURL}/users/signup`, params);
    return myResponse;
  } // end of signupFunction function

  // Declaring the signinFunction function in the service
  public signinFunction(data) {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.baseURL}/users/login`, params);
  } // end of signinFunction function
}
