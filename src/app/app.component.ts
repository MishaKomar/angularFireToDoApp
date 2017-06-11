import { Component } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent {
	constructor(public authService: AuthService){}
}