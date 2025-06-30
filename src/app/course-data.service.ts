import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Course } from './courses-list/Course';

const URL='https://681a1c301ac115563507d662.mockapi.io/course/course'

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  constructor(private http: HttpClient) { }

  /**
   * consume la api de cervezs y devuelve un observable a la rta
   */

  public getAll():  Observable<Course[]>{ //Sintaxis angular: despues de los 2 puntos pones qué tipo devuelve el metodo. el observable no existe como tipo, por eso se castea: hay que decir que estructura está observando el observable , es como el miron esta mirando el arreglo de objeto courses
    // codigo para consumir la api 
    // fetch ('url,{method,'get)
    // tranfromamos la rta antes de retornarla
    // aca le agregamos la cantidad en 0 a cada objeto course 
    return this.http.get<Course[]>(URL)
            .pipe(
              tap(( courses: Course[]) => courses.forEach(course => course.quantity=0))
            ); //tap es una operacion q toca lo q viene antes de emitirlo y hace algo,lo tranforma es como un map 
    //devuelve un observable del arreglo de mockapi, a ese observable hay que observarlo: hay que usarlo sacandolo para afuera, donde otro componente se subscribira a el para enterarse cada vez que cambia 
  }
}
