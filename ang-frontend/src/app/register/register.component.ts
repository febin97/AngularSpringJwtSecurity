import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private _registerService: RegisterService) { }
  public tokenObj;
  public varAlready=false;
  public variable;
  ngOnInit() {
  }
  goToLogin(username,password){
    this._registerService.register({username:username,password:password}).subscribe(
      data=>
        {this.tokenObj=data;
        if(this.tokenObj.token=="UserName already Exists"){
            this.varAlready=true;
        }else{
          this.varAlready=false;
          this._registerService.sayHello(this.tokenObj.token).subscribe(data1=>this.variable=data1);
        }});
      }
}
