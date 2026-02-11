
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit {
  todos: any[] = [];
  title = '';

  editId: number | null = null;
  editTitle = '';

  selectedTodo: any = null;

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getTodos().subscribe(t => (this.todos = t));
  }

  add() {
    if (!this.title.trim()) return;

    this.service.addTodo(this.title).subscribe(() => {
      this.title = '';
      this.load();
    });
  }

  toggle(todo: any) {
    this.service.updateTodo(todo).subscribe();
  }

  remove(id: number) {
    this.service.deleteTodo(id).subscribe(() => this.load());
  }

  /* UPDATE */
  startEdit(todo: any) {
    this.editId = todo.id;
    this.editTitle = todo.title;
  }

  update(todo: any) {
    todo.title = this.editTitle;
    this.service.updateTodo(todo).subscribe(() => {
      this.editId = null;
      this.editTitle = '';
    });
  }

  /* DETAILS */
  showDetails(todo: any) {
    this.selectedTodo = todo;
  }
}
