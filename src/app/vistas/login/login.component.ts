import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl , Validators} from '@angular/forms';
import {ApiService} from '../../servicios/api/api.service';
import {LoginI} from '../../modelos/login.interface';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new  FormGroup  ({

    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router){  }

  ngOnInit(): void {
    // this.checkLocalStorage();

  }
  
  // checkLocalStorage(){

  //   if (localStorage.getItem('token')){
  //     this.router.navigate(['/dashboard']);s
  //   }
  // }
 
  onLogin(form: LoginI) {
    // this.api.loginByEmail(form).subscribe(data => {
    //     if ( data.token){
    //       localStorage.setItem('token', data.token);
    //       localStorage.setItem('userName', form.userName);
    //        this.router.navigate(['/menulateral']);
          
    //     }
    // });
    this.router.navigate(['/menulateral']);

  }

}












    // onLogin(form: LoginI) {
    //  this.api.loginByEmail(form).subscribe(data => {
    //      console.log(data);
    //    let dataResponse: ResponseI = data;
    //   if (dataResponse.status == 'ok') {
    //       localStorage.setItem('token', dataResponse.result.token);
    //       this.router.navigate(['/dashboard']);
    //   }
    // });