class Recepcionista {
  constructor({ idRecepcionista, nombre, apellido, dni, legajo, turnoTrabajo }) {
    this.idRecepcionista = idRecepcionista;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.legajo = legajo;
    this.turnoTrabajo = turnoTrabajo;
  }

  registrarPaciente(paciente) {
    paciente.registrado = true;
  }
}

module.exports = Recepcionista;