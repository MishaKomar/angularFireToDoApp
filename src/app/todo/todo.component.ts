import { Component } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

	constructor(public authService:AuthService, private router: Router) {}

	logout() {
		this.authService.logout()
		.then(
	        (success) => {
	        this.router.navigate(['/login'])
	      });
	}

}
