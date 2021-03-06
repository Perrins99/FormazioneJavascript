// Only change code below this line
class Thermostat{
  constructor(tempF){
    this._tempF=tempF;
  }

  get temperature(){
    return 5/9 * (this._tempF - 32);
  }

  set temperature(tempC){
    this._tempF = tempC * 9 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius