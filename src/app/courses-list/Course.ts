export interface Course {//de cualquier lugar la puedo importar por ponele export
    name: String,
    duration: String,
    price: number,
    quota: number,  //cupo disponible 
    image: String,
    offer: Boolean,
    quantity: number,//cantidad comprada no es problema del backend
    id: number
}
