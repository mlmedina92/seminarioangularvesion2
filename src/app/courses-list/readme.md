Cuando usás:

[(quantity)]="course.quantity" estás usando two-way data binding (enlace bidireccional de datos), que significa:

🔁 Comunicación en ambos sentidos:
De TypeScript al HTML (padre → hijo)
Angular le pasa el valor actual de course.quantity al componente hijo <app-input-integer> usando binding de entrada ([quantity]).

Del HTML (hijo) al TypeScript (hijo → padre)
Si el usuario cambia la cantidad desde el componente hijo, ese nuevo valor se devuelve automáticamente al padre y actualiza course.quantity. Esto se logra con un event binding como (quantityChange) internamente en el componente hijo.

¿Cómo funciona por dentro?
Para que [(quantity)] funcione en un componente personalizado como <app-input-integer>, este tiene que:

1. Tener un @Input():
ts

@Input() quantity: number = 0;
2. Tener un @Output() para emitir cambios:
ts

@Output() quantityChange = new EventEmitter<number>();
Y cuando cambia el valor dentro del hijo (por ejemplo, el usuario suma o resta), se emite así:

ts

this.quantityChange.emit(this.quantity);
Con eso, Angular sincroniza automáticamente los datos entre padre e hijo.








