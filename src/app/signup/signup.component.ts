import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public authService: AuthService,private router: Router) {
    this.authService.user.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/todo');
      }
    });
  }

  onSubmit(formData) {
    if(formData.valid) {
      this.authService.signUp(formData.value.email, formData.value.password)
      .then(
        (success) => {
        this.router.navigate(['/login'])
      }).catch(
        (err) => {
        this.error = err;
      });
    } 
  }

  ngOnInit() {
  }

}
