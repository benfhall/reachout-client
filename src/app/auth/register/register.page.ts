import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

  register(form) {
    this.authService.register(form.value).subscribe((res) => {

    });
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

}
