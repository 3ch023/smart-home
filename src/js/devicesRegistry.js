import {Light} from "./devices/light";
import {Thermostat} from "./devices/thermostat";

export class DevicesRegistry {
  loadDevices() {
    let lightLivingRoom = new Light("11", "Living Room", true);
    let lightKitchen = new Light("12", "Kitchen", false);
    let thermostat = new Thermostat("21", "First Floor", 25);
    let thermostat2 = new Thermostat("22", "Second Floor", 15);
    return [lightLivingRoom, lightKitchen, thermostat, thermostat2];
  }
}