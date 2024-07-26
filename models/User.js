export class User {
    //JavaScript no tiene tipado por lo que iniciamos el constructor directamente
    constructor(nombre,apellidos, dni, numColegiado, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.numColegiado = numColegiado;
        this.telefono = telefono;
    }

    addFicha(ficha) {
        this.fichas = this.fichas || [];
        this.fichas.push(ficha);
    }
}
