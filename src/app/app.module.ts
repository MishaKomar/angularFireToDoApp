import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';

import { TodoService } from './shared/todo.service';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.service';

import { routes } from './app.routes';

export const firebaseConfig = {
	apiKey: "AIzaSyCStLRyowsHGPEMO_dq-xzTSpacmxi_Tnk",
    authDomain: "angular2test-518b8.firebaseapp.com",
    databaseURL: "https://angular2test-518b8.firebaseio.com",
    projectId: "angular2test-518b8",
    storageBucket: "angular2test-518b8.appspot.com",
    messagingSenderId: "54817075237"
};

@NgModule({
 imports: [
 	BrowserModule, 
 	FormsModule,
 	HttpModule,
 	AngularFireModule.initializeApp(firebaseConfig),
 	AngularFireAuthModule,
 	routes,
 	AngularFireDatabaseModule,
    AngularFireAuthModule
 ],
 declarations: [
 	AppComponent, 
 	TodoFormComponent,
 	TodoListComponent,
 	TodoItemComponent,
 	LoginComponent,
 	SignupComponent,
 	TodoComponent
 ],
 providers: [
 	TodoService,
 	AuthService,
 	AuthGuard
 ],
 bootstrap: [
 	AppComponent
 ]	
})

export class AppModule {

}