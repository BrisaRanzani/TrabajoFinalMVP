class Paciente {
  constructor({ idPaciente, nombre, apellido, dni, obraSocial, registrado = false, telefono, habitacion }) {
    this.idPaciente = idPaciente;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.obraSocial = obraSocial;
    this.registrado = registrado;
    this.telefono = telefono;
    this.habitacion = habitacion;
  }

  obtenerNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}

module.exports = Paciente;