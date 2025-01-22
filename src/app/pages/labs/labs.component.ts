import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludoVariable = 'Hola desde la logica';
  tasks = [
    'Instalar angular',
    'Crear un nuevo proyecto',
    'Imprimir un arreglo'
  ];
  name = 'Breynner Ariza';
  edad = 18;
}
