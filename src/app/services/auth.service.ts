import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map }  from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { accessSync } from 'fs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  registerUser(email: string, password: string){
    const url_api = `http://localhost:3000/users/signup`;
    return this.http.post(url_api, 
      {
        email: email,
        password: password
      },
     {headers: this.headers}
     )
     .pipe(map(data => data));
  }

  loginUser(email: string, password: string): Observable<any> {
    const url_api = `http://localhost:3000/users/login`;
    return this.http.post(url_api,
      {
        email: email,
        password: password
      },
      {
        headers: this.headers
      }
      )
      .pipe(map(data => data))
  }
  
  setUser(user):void {
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string)
  }

  setToken(token):void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    localStorage.getItem('accessToken');
  }

  getCurrentUser(){
    let user_current = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_current)) {
      let user = JSON.parse(user_current);
      return user;
    } else {
      return null;
    }
  }

  logOut(){
    let accessToken = localStorage.getItem('accessToken');
    const url_api = `http://localhost:3000users/logout?access_token${accessToken}`;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.http.post(url_api, {headers: this.headers})
  }
}
