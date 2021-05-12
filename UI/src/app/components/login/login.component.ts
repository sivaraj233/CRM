import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/assets/form-meta/login-form';
import { Output, EventEmitter } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public data = LoginData;
  constructor(private loginService: CommonserviceService, private router:Router) {}

  ngOnInit(): void {}

  public login(loginDetails) {
    const data = this.loginService.login(loginDetails);
    this.router.navigateByUrl('dashbaord');
  }
}
