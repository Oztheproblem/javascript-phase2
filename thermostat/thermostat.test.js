const Thermostat = require('./Thermostat');


// test('Example test', () => {
//     // Test code goes here
//     // Use assertions or other test functions to verify the expected behavior
//   });

describe('Thermostat', () => {
  it('returns 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('returns 22 after .up() is called twice', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it('returns 19 after .down() is called', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('returns 25 as max temp if PSM is on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = thermostat.getTemperature(); i <= 25; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('returns 32 if setPowerSavingMode is off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = thermostat.getTemperature(); i <= 32; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it('does not go lower than 10', () => {
    const thermostat = new Thermostat();
    for (let i = thermostat.getTemperature(); i > 10; i--) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  })

  it('resets the temperature to 20', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset(); 
    expect(thermostat.getTemperature()).toEqual(20);
  });

});
