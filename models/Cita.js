export class Cita{
    // este se llamara cuando no exista este modelo en BBDD
    constructor(IdPaciente, fecha, hora){
        this.IdPaciente = IdPaciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    // este se llamara cuando recojamos un modelo de Cita de BBDD
    constructor (id, idPaciente, fecha, hora) {
        this.id = id;
        this(idPaciente, fecha, hora);
    }
}