import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

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
  nombre = 'Breynner Ariza';
  edad = 18;

  // PROPERTI BINDING
  inputValue = 'Breynner Ariza';
  imgUri = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  imgDescription = 'Foto de perfil';
  buttomValue = 'Click me';
  buttomDisabled = true;

  //Creacion de objetos
  person = {
    name: 'Breynner Ariza',
    age: 21,
    description: 'Utilizando propiedades utilizando un objeto'
  }

  //NAME REACTIVO
  nameReactivo = signal('Breynner Ariza Reactivo');

  clickHander(){
    alert('Hola');
  }

  chageInput(event : Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.nameReactivo.set(newValue);
  }

  keyDownHandler(event : KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

}
