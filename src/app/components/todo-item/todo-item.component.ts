import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  //Set onToggle
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  //Set onDelete
  // onDelete(todo) {
  //   alert("Coming Soon!")
  // }


  //Sweet Alerts
  opensweetalert() {
    Swal.fire({
      text: 'Hello!',
      icon: 'success'
    });
  }

  opensweetalertdng() {
   Swal.fire('Oops...', 'Something went wrong!', 'error')
  }

  opensweetalertcst() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Todo item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your Todo item has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Todo item is safe :)',
          'error'
        )
      }
    })
  }
}
