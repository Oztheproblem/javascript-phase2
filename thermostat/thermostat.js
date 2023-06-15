class Thermostat {
    constructor() {
      this.temperature = 20;
      this.powerSavingMode = false;
    }
  
    getTemperature() {
      return this.temperature;
    }
  


    up() {
      if (this.powerSavingMode && this.temperature >= 25) {
        return this.temperature;
      } else if (!this.powerSavingMode && this.temperature >= 32) {
        return this.temperature;
      } else {
        this.temperature += 1;
        return this.temperature;
      }
    }
  
    down() {
        if (this.temperature < 10) {
            return this.temperature = 10
          } else {
      this.temperature -= 1;
      return this.temperature;
        }
    }
  
    setPowerSavingMode(on) {
      this.powerSavingMode = on;
      if (this.powerSavingMode && this.temperature >= 25) {
      this.temperature = 25;
      }
    }

    reset() {
       if (this.temperature.getTemperature != 20) {
        return this.temperature =20
       }
    }
  }
  
// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20

module.exports = Thermostat;