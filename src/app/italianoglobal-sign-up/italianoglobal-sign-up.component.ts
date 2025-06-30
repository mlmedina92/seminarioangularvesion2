import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-italianoglobal-sign-up',
  standalone: false,
  templateUrl: './italianoglobal-sign-up.component.html',
  styleUrl: './italianoglobal-sign-up.component.scss'
})
export class ItalianoglobalSignUpComponent {

  // creo el formgroup  
  FormSignUp = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', []), //Validators.required --> no se lo ponemos porque ya con el isMismatch lo comparamos con la password
  }, [this.isMismatch]);

  /** FUNCION QUE PIDE UN CONTROL COMO PARAMETRO Y DEVUELVE UNA ValidationErros o null **/
  isMismatch(control: AbstractControl): ValidationErrors | null {

    //FORMA UNO
    // return control.get('password')?.value !== control.get('confirmPassword')?.value //si la password y la confirmacion de la password son distintas...
    // ? { passwordMismatch : true}  //retorna un objeto "claver:valor", cuando envia esto suponemos que esta enviando un error ...
    // : null // de lo contrario (si son iguales) retorna null 

    //FORMA DOS
    if (control.get('password')?.value !== control.get('confirmPassword')?.value) { //si la password y la confirmacion de la password son distintas...
      return { passwordMismatch: true } //retorna un objeto "claver:valor", cuando envia esto suponemos que esta enviando un error--> OBJETO ValidationErrors ...
    } else {
      return null// de lo contrario (si son iguales) retorna null 
    }

  };


  onSubmit() {
    // console.log(this.FormSignUp.value);
    if (this.FormSignUp.valid) {
      console.log(this.FormSignUp.value);
    }else{
      //si es invalido podemos enviar un aviso o cartel
    }
  }

}
