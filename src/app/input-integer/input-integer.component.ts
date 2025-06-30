import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../courses-list/Course';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss',
})
export class InputIntegerComponent {
  @Input() quantity!: number;

  // el hijo recibe la info del papa con un input ????
  @Input() max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  // evento que emito cada vez q llegue al limite de stok
  @Output()
  // el hijo emite el evento maxReached , el papa course-list-component.ts lo captura ??????
  maxReached:EventEmitter<number> = new EventEmitter<number>();

  // creo un evento click donde clicken en boton + quantity aumenta en 1
  upQuantity(): void {
    if (this.max > this.quantity) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit(this.max);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
      
    }
  }

  onChangeQuantity(event: Event): void {
    console.log(event); // toda la info del evento

    // casteo para poder acceder al value del input ya que esd e tipo text para operar lo necesito en numero
    const input = event.target as HTMLInputElement;
    const valorIngresado = parseInt(input.value, 10); //10 indica que es numero decimal

    // chequeo si el valor ingresado es mayor a cero y menor que el stock
    if (valorIngresado < 0) {
      // sino, si es menor a cero, asigna cero
      input.value = '0'; //cambia el valor del input en la pantalla si ingreso un numero neg , escribe 0
      this.quantity = 0;
    } else if (valorIngresado > this.max) {
      // sino, si es mayor al stock, asigna todo el stock
      input.value = this.max.toString();
      this.quantity = this.max;
      this.maxReached.emit(this.max);
    } else {
      // si sí, asigna el valor ingresado al value del input
      this.quantity = valorIngresado;
    }
    this.quantityChange.emit(this.quantity);

    // console.log(event.key); // p saber qué letra apreté (esto solo sirve en eventos tipo keydown/keypress)
  }
}
