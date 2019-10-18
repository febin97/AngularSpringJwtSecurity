import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: 'http://localhost:8080/';

  constructor() {
  }

  // attemptAuth(ussername: string, password: string): any {
  //   const credentials = {username: ussername, password: password};
  //   console.log('attempAuth ::');
  //   return this.http.post('http://localhost:8080/authenticate', credentials);
  // }
}
