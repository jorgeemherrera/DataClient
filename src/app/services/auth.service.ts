import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken() {

  }
  
  getToken() {
    return process.env.JWT_KEY;
  }
}
