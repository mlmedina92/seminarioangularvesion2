import { Component } from '@angular/core';

@Component({//definir un componente con @ 
  // componente principal de la app que es el punto de entrada de la app 
  selector: 'app-root', //nombre que vamos a usar para referenciarlo cuando lo queremos usar(incluirlo)
    // <app-route> asi lo incluyo en en html 
  templateUrl: './app.component.html',//el html del componente
  standalone: false,
  styleUrl: './app.component.scss'//hojas de estilo del componente
})
export class AppComponent {  
  // propiedad title del componente 
  title: String = 'Italiano Global - Academia virtual';
}
