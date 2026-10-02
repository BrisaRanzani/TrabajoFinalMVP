class PrescripcionMedica {
  constructor({ idPrescripcion, fecha = new Date(), medicamento, dosis, indicaciones, idMedico, idPaciente }) {
    this.idPrescripcion = idPrescripcion;
    this.fecha = fecha;
    this.medicamento = medicamento;
    this.dosis = dosis;
    this.indicaciones = indicaciones;
    this.idMedico = idMedico;
    this.idPaciente = idPaciente;
  }
}

module.exports = PrescripcionMedica;