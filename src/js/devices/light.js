import {Device} from "./device";

export class Light extends Device {
    /**
     * Creates a new device instance.
     * @param {String} id - unique identifier of a device
     * @param {String} name - name, displayed on the control panel
     * @param {Boolean} power identifies if this light's power is on or off
     */
    constructor(id, name, power) {
        super(id, name);
        this.power = power;
    }

    /**
     * Initialize UI elements with logic for certain device.
     * Should be called only after component is rendered.
     */
    initializeEvents() {
        this.controlPanel.on("click", this.selector, (event) => {
            this.power = !this.power;
            this.refresh();
        });
    }

    /**
     * Generate html for this device with current state.
     * @returns {String} Returns html representation of the device.
     */
    getInnerHtml() {
        let checked = this.power ? 'checked' : '';
        let label = this.power ? 'On' : 'Off';
        return "<h3>Light: " + this.name + " </h3> " +
            "<div class='spectrum-ToggleSwitch'>" +
            "        <input type='checkbox' class='spectrum-ToggleSwitch-input' id='toggle-onoff-1' " + checked + ">" +
            "        <span class='spectrum-ToggleSwitch-switch'></span>" +
            "        <label class='spectrum-ToggleSwitch-label' for='toggle-onoff-1'>" + label + "</label>" +
            "      </div>";
    }
}