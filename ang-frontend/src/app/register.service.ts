import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  register(userObj):any{
    let post_url = `http://localhost:8080/authenticate`;
    console.log(userObj.username);
    return this.http.post(post_url,userObj,httpOptions);
  }
  sayHello(token:string){
    let post_url = `http://localhost:8080/hello`;
    let httpOptionsNew = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token
      })
    };
    console.log(httpOptionsNew);
    
    return this.http.get(post_url,httpOptionsNew);
  }
  Login(userObj):any{
    let post_url = `http://localhost:8080/register`;
    console.log(userObj.username);
    return this.http.post(post_url,userObj,httpOptions);
  }
}
