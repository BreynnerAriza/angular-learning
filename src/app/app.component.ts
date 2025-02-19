import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  saludoVariable = 'Hola desde la logica';
  tasks = [
    'Instalar angular',
    'Crear un nuevo proyecto',
    'Imprimir un arreglo'
  ];
}
