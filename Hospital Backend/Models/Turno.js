class Turno {
  constructor({ idTurno, fechaInicio, fechaFin, duracion, entreTurno, advertencia, estadoTurno = 'Programado', disponibilidad = true, idMedico, idPaciente = null, idRecepcionista = null }) {
    this.idTurno = idTurno;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.duracion = duracion;
    this.entreTurno = entreTurno;
    this.advertencia = advertencia;
    this.estadoTurno = estadoTurno;
    this.disponibilidad = disponibilidad;
    this.idMedico = idMedico;
    this.idPaciente = idPaciente;
    this.idRecepcionista = idRecepcionista;
  }

  cambiarEstado(nuevoEstado) {
    this.estadoTurno = nuevoEstado;
  }

  regularDuracion(nuevaDuracion) {
    this.duracion = nuevaDuracion;
  }
}

module.exports = Turno;