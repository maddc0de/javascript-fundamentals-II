class Thermostat {
  constructor() {
    this.temperature = 20;
    this.is_on = false
  }
  setPowerSavingMode(boolean) {
    this.is_on = boolean
  }

  getTemperature() {
    return this.temperature;
  }
  
  up() {
    if (this.is_on && this.temperature >= 25) {
      return this.temperature = 25;
    } else if (this.temperature === 32){
      return this.temperature;
    }
    return this.temperature += 1;
  }

  down() {
    if (this.temperature === 10) {
      return this.temperature;
    }
    return this.temperature -= 1;
  }

  reset() {
    return this.temperature = 20;
  }
}

module.exports = Thermostat;