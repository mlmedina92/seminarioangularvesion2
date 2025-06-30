import { Injectable } from '@angular/core';
import { Course } from './courses-list/Course';
import { BehaviorSubject } from 'rxjs';
// CADA SERVICIO ES UNA CLASE
@Injectable({
  providedIn: 'root',
})
/**
 * la clase CourseCartService maneja la logica del carrito: agregar, borrar
 */
export class CourseCartService {

  private _cartList: Course[]=[];// variable, atributo privado de la clase CourseCartService, arreglo donde se ponen los cursos comprados

  cartList : BehaviorSubject<Course[]> = new BehaviorSubject(this._cartList);// behaiorSubject sirve para encapsular una variable el arreglo que va a tener sucbriptores q observen sus cambios, el carrito lo observara 

 
  constructor() {
    // CONTRUCTOR DEL SERVICIO
    // EL SS LO VAMOS A USAR DESDE LA LISTA DE CURSOS
  }

  addToCart(course: Course) {
    // al find le pongo como comparo el valor 1 y valor 2 , el find busca si hay alguna cerveza en la lista q tenga el mismo nombre
    let item: Course | undefined = this._cartList.find((valor1) => valor1.name == course.name); //true || false
    if (!item) {//si no esta en el cart, lo agrega 
      this._cartList.push({ ... course });//objeto starcting con este creo un objeto con iguales clave y valor que ese curso pone toda la info del objeto course pero en otro objeto igual crea una copia digamos. Se usa para que cuando descontamos cantidad en la lista de compras, no descuente en el carrito . TE CLONA EL OBJETO 
    }else{
      item.quantity+=course.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);//siguiente valor del beahior subject, este es el nuevo valor q tendra el arreglo, le actualizamos el valor al behaiorsubject , notificando a los que se subscriban al behaior subjetc
  }
}
