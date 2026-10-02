class SignosVitales {
  constructor({ idReg, fechaHora = new Date(), presionArterial, frecuenciaCardiaca, temperatura, idPaciente, idEnfermero }) {
    this.idReg = idReg;
    this.fechaHora = fechaHora;
    this.presionArterial = presionArterial;
    this.frecuenciaCardiaca = frecuenciaCardiaca;
    this.temperatura = temperatura;
    this.fueraDeRango = false;
    this.idPaciente = idPaciente;
    this.idEnfermero = idEnfermero;
  }

  validarRangos() {
    if (this.temperatura > 38 || this.frecuenciaCardiaca > 100 || this.frecuenciaCardiaca < 60) {
      this.fueraDeRango = true;
    } else {
      this.fueraDeRango = false;
    }
    return this.fueraDeRango;
  }
}

module.exports = SignosVitales;