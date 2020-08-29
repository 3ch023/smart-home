import {Light} from "./devices/light";

export class DevicesRegistry {
  loadDevices() {
    let lightLivingRoom = new Light("124", "Living Room", true);
    let lightKitchen = new Light("357", "Kitchen", false);
    return [lightLivingRoom, lightKitchen];
  }
}