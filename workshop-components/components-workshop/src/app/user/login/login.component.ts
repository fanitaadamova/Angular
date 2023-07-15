import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router) { }
  //login(email: string, password: string): void
  login(form: NgForm): void {
    //TODO: for now we are not handle log-in data
    if (form.invalid) {
      return;
    }
    console.log(form.value);

    this.userService.login();
    this.router.navigate(['/']);

  }
}
