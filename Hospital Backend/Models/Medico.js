class Medico {
  constructor({ idMedico, nombre, apellido, matricula, idEspecialidad, duracionTurno, fechaInicioTurno, fechaFinTurno, estado = 'Activo', idPaciente = null }) {
    this.idMedico = idMedico;
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
    this.idEspecialidad = idEspecialidad;
    this.duracionTurno = duracionTurno;
    this.fechaInicioTurno = fechaInicioTurno;
    this.fechaFinTurno = fechaFinTurno;
    this.estado = estado;
    this.idPaciente = idPaciente;
  }

  asignarPaciente(idPaciente) {
    this.idPaciente = idPaciente;
  }

  cancelarReserva(idTurno) {
    console.log(`Reserva ${idTurno} cancelada por el médico ${this.idMedico}`);
  }
}

module.exports = Medico;