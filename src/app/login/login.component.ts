import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  _router;
  _service: DataService;
  constructor(router: Router, service: DataService) { 
    this._router = router;
    this._service = service;
  }

  ngOnInit(): void {
    this.createComponent();
  }

  createComponent(){
    this.loginForm = new FormGroup({
      userName : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
  }

  login(){
      let user = this.loginForm.get('userName')?.value ;
      //Navigates user to user list page
      if(this.loginForm.valid){
        this._service.saveUserInfo(user)
      this._router.navigateByUrl('/user-list');
      }
  }

}
