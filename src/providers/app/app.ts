import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  registerURL = "http://localhost:3000/api/appUsers?";
  loginURL = "http://localhost:3000/api/appUsers/login?";
  logoutURL = "http://localhost:3000/api/appUsers/login?";

  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }

  register(newUserData){
    console.log("service", newUserData);
    return this.http.post(this.registerURL, newUserData);
  }

  login(userData){
    return this.http.post(this.loginURL , userData);
    
    
}
logout(token){
  return this.http.post(this.logoutURL  +  '?access_token=' + token, {});
  
}
}
