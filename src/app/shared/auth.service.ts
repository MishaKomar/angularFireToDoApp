import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router } from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthService {
	user: Observable<firebase.User>;
	isLogged: boolean = false;
  	constructor(public afAuth: AngularFireAuth, private router: Router) {
	    this.user = afAuth.authState;
	    this.afAuth.auth.onAuthStateChanged(function(user) {
		  this.isLogged = user ? true: false;
		});
	}

	signUp(email, pass){
		return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
	}

	loginWithEmail(email, pass){
	    return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
	}

	loginWithGoogle() {
	    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	logout() {
	    return this.afAuth.auth.signOut();
	}
}

@Injectable()
export class AuthGuard implements CanActivate {
	user: Observable<firebase.User>;

    constructor(private auth: AngularFireAuth, private router: Router) {
	    this.user = auth.authState;	
    }
    canActivate(): Observable<boolean> {
		return Observable.from(this.user)
        	.take(1)
        	.map(state => !!state)
        	.do(authenticated => {
      			if 
        		(!authenticated) this.router.navigate([ '/login' ]);
      		})
    }
 
}