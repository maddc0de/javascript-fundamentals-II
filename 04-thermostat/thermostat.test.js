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
})