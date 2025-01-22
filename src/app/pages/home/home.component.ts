import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

import { Task } from '../../models/task.model'
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear component',
      completed: false
    }
  ]);

  newTaskControl = new FormControl('',{
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.pattern(/^\S*$/)
    ]
  });


  createTask(event : Event){
    const input = event.target as HTMLInputElement;
    this.addTaks(input.value)
    input.value = '';
  }

  addTaks(value : String){
    const newTask = {
      id: Date.now(),
      title: value,
      completed: false
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index : number){
    this.tasks.update((tasks) => tasks.filter((tasks, position) => position != index));
  }

  changeCompletedTask(index : number){
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if(position == index){
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    });
  }

  changeAddTask(){
    if(this.newTaskControl.valid){
      this.addTaks(this.newTaskControl.value.trim());
      this.newTaskControl.setValue('');
    }
  }

  clearCompleted(){
    this.tasks.update((tasks) => tasks.filter((task => task.completed == false)));
  }

}
