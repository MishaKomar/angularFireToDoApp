import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Todo } from './todo';
import 'rxjs/Rx';


@Injectable()
export class TodoService {
	todos: any; 
	constructor(public db: AngularFireDatabase){
		this.todos = db.list('todos');
	}

	getTodos() {
		return this.todos;
	}

	createTodo(title: string){
		let todo = new Todo(title);
		this.todos.push(todo);
		console.log('item added!', todo)
	} 

	deleteTodo(todo: Todo){
		this.todos.remove(todo)
		.then(item => {console.log('item deleted!', todo)});
	}

	toggleTodo(todo: Todo){
		todo.completed = !todo.completed;
		this.todos.update(todo, todo)
		.then(item => {console.log('item updated!', todo)});
	} 
}