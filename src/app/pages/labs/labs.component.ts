import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-labs',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  saludoVariable = 'Hola desde la logica';
  tasks = signal([
    'Instalar angular',
    'Crear un nuevo proyecto',
    'Imprimir un arreglo'
  ]);
  nombre = 'Breynner Ariza';
  edad = 18;

  // PROPERTI BINDING
  inputValue = 'Breynner Ariza';
  imgUri = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
  imgDescription = 'Foto de perfil';
  buttomValue = 'Click me';
  buttomDisabled = true;

  //Creacion de objetos
  person = signal({
    name: 'Karen Arizas',
    age: 12,
    description: 'Utilizando propiedades utilizando un objeto'
  });

  //NAME REACTIVO
  nameReactivo = signal('Breynner Ariza Reactivo');

  colorControl = new FormControl();


  constructor(){
   
  }

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

  changeName(event : Event){
    const input = event.target as HTMLInputElement;
    const name = input.value;
    this.person.update((person) => {
      return {
        ...person,
        name
      };
    })
  }

  changeAge(event : Event){
    const input = event.target as HTMLInputElement;
    const ageValue = input.value;

    this.person.update((person) => {
      return {
        ...person,
        age: parseInt(ageValue)
      }
    });
  }

}
