import {Light} from "./devices/light";
import {Thermostat} from "./devices/thermostat";
import {Curtains} from "./devices/curtains";

/**
 * Mock Implementation of the server, providing registered devices.
 */
export class DevicesRegistry {
  loadDevices() {
    let lightLivingRoom = new Light("11", "Living Room", true);
    let lightKitchen = new Light("12", "Kitchen", false);
    let thermostat = new Thermostat("21", "First Floor", 25);
    let thermostat2 = new Thermostat("22", "Second Floor", 10);
    let curtains = new Curtains("31", "Bedroom", true);
    return [lightLivingRoom, lightKitchen, thermostat, thermostat2, curtains];
  }
}