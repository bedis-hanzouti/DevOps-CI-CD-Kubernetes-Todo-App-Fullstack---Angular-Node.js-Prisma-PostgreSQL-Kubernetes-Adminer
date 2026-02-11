
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TodoService {
  // private api = 'http://localhost:3000/api/todos';
  private api = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any[]>(this.api);
  }

  addTodo(title: string) {
    return this.http.post(this.api, { title });
  }

  updateTodo(todo: any) {
    return this.http.put(`${this.api}/${todo.id}`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
