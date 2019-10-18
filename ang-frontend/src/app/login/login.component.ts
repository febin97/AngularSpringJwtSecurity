import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AuthService} from '../auth.service'
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private _registerService: RegisterService) { }
  ngOnInit() {
    
  }
  public tokenObj;
  public variable;
  public varAlready;
  goToHome(username,password){
    this._registerService.Login({username:username,password:password}).subscribe(
      data=>
        {this.tokenObj=data;
        if(this.tokenObj.token=="Login Failed Wrong Password"){
            this.varAlready=true;
        }else{
          this.varAlready=false;
          this._registerService.sayHello(this.tokenObj.token).subscribe(data1=>this.variable=data1);
        }});
    }

  }
