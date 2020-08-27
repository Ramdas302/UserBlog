import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, ParamMap, Router } from '@angular/router';
import { TodosService } from '../todo-list/todos.service';
import { Todo } from '../todo-list/todo.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html',
    styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
    todo: Todo;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private todosService: TodosService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
            this.todosService.fetchTodoById(paramMap.get('id'))
                .subscribe((responseData) => {
                    this.todo = responseData.todo;
                });
        });
    }

    onSubmit(form: NgForm) {
        this.todosService.updateTodo(this.todo._id, form.value.description,form.value.blog_title,form.value.image_url)
            .subscribe((responseData) => {
                this.router.navigate(['/todos']);
            });
    }
}
