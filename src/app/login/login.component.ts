import { Component, HostBinding } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;
  constructor(public authService: AuthService, private router: Router) {
  	this.authService.user.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/todo');
      }
    });
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.authService.loginWithEmail(formData.value.email, formData.value.password)
      .then(
        (success) => {
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        this.error = err;
      })
    }
  }

  loginGoogle() {
    this.authService.loginWithGoogle()
      .then(
        (success) => {
        this.router.navigate(['/todo']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

}
