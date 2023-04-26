const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  let thermostat;
  beforeEach(() => { thermostat = new Thermostat() })

  describe('.getTemperature', () => {
    it('initially has a temperature of 20 degrees', () => {
      expect(thermostat.getTemperature()).toBe(20);
    })

    it('should return a higher temperature when up method is called', () => {
      thermostat.up();
      thermostat.up();

      expect(thermostat.getTemperature()).toBe(22);
    })

    it('should return a lower temperature when down method is called', () => {
      thermostat.up();
      thermostat.up();
      thermostat.down();

      expect(thermostat.getTemperature()).toBe(21);
    })

  })

  describe('.down', () => {
    it('has a minimum possible temperature of 10 degrees', () => {
      for (let i = 0 ; i < 20 ; i++) {
        thermostat.down();
      }

      expect(thermostat.getTemperature()).toBe(10);
    })

  })

  describe('.setPowerSavingMode', () => {
    it('sets a max temperature of 25 degrees when it is on', () => {
      thermostat.setPowerSavingMode(true);

      for (let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }

      expect(thermostat.getTemperature()).toBe(25);
    })

    it('should have a maximum temperature of 32 degrees when it is off', () => {
      thermostat.setPowerSavingMode(false);

      for (let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }

      expect(thermostat.getTemperature()).toBe(32);
    })

  })


  describe('.reset', () => {
    it('sets the temperature back to its default value of 20', () => {
      thermostat.up();
      thermostat.reset();

      expect(thermostat.getTemperature()).toBe(20);
    })

  })

})