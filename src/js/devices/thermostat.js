import {Device} from "./device";

/**
 * Thermostat device, allowing user to change temperature in a certain area .
 */
export class Thermostat extends Device {
    /**
     * Creates a new device instance.
     * @param {String} id - unique identifier of a device
     * @param {String} name - name, displayed on the control panel
     * @param {Number} temperature of this thermostat
     */
    constructor(id, name, temperature) {
        super(id, name);
        this.temperature = temperature;
    }

    /**
     * Initialize UI elements with logic for certain device.
     * Should be called only after component is rendered.
     */
    initializeEvents() {
        if (this.self.length === 0) {
            console.warn("Failed to initialize events for device " + this.id);
            return;
        }
        this.self.on("click", '.spectrum-Stepper-stepUp', () => {
            this.temperature = this.temperature + 5;
            this.refresh();
        });
        this.self.on("click", '.spectrum-Stepper-stepDown', () => {
            this.temperature = this.temperature - 5;
            this.refresh();
        });
        this.self.on("change", '.spectrum-Stepper-textfield', () => {
            this.temperature = this.self.find('.spectrum-Textfield-input').val();
            this.refresh();
        });
    }

    /**
     * Generate html for this device with current state.
     * @returns {String} Returns html representation of the device.
     */
    getInnerHtml() {
        return "<h3>Temperature: " + this.name + " </h3>" +
            "    <span class='spectrum-Label spectrum-Label--large spectrum-Label--" + this.getColor() + "'>" + this.temperature + "</span> <br><br>" +
            "    <div class='spectrum-Stepper is-focused'>" +
            "      <div class='spectrum-Textfield spectrum-Stepper-textfield'>" +
            "        <input type='number' class='spectrum-Textfield-input spectrum-Stepper-input' placeholder='25' min='5' max='35' step='5' value='" + this.temperature + "'>" +
            "      </div>" +
            "      <span class='spectrum-Stepper-buttons'>" +
            "        <button class='spectrum-FieldButton spectrum-Stepper-stepUp' tabindex='-1'>" +
            "          <svg class='spectrum-Icon spectrum-UIIcon-ChevronUpSmall' focusable='false' aria-hidden='true'>" +
            "            <use xlink:href='#spectrum-css-icon-ChevronUpSmall' />" +
            "          </svg>" +
            "        </button>" +
            "        <button class='spectrum-FieldButton spectrum-Stepper-stepDown' tabindex='-1'>" +
            "          <svg class='spectrum-Icon spectrum-UIIcon-ChevronDownSmall' focusable='false' aria-hidden='true'>" +
            "            <use xlink:href='#spectrum-css-icon-ChevronDownSmall' />" +
            "          </svg>" +
            "        </button>" +
            "      </span>" +
            "    </div>";
    }

    /**
     * Return color indicator depending on the devices temperature.
     */
    getColor() {
        if (this.temperature <= 15) {
            return "blue";
        } else if (this.temperature <= 30) {
            return "orange";
        } else {
            return "red";
        }
    }
}