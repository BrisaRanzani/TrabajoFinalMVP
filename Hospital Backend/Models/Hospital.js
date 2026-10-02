class Hospital {
  constructor(nombre) {
    this.nombre = nombre;
    this.pacientes = [];
    this.medicos = [];
    this.turnos = [];
  }

  // Métodos para agregar elementos
  agregarPaciente(paciente) {
    this.pacientes.push(paciente);
  }

  agregarMedico(medico) {
    this.medicos.push(medico);
  }

  agregarTurno(turno) {
    this.turnos.push(turno);
  }

  // Métodos de búsqueda simples
  buscarPacientePorDni(dni) {
    return this.pacientes.find(p => p.dni === dni);
  }

  buscarTurnosPorMedico(idMedico) {
    return this.turnos.filter(t => t.idMedico === idMedico);
  }
}

module.exports = Hospital;