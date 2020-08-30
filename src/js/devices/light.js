import {Device} from "./device";

/**
 * Light device. Have you tried to switch it off and on again?
 */
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
        this.controlPanel.on("click", this.selector, () => {
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
        let opacity = this.power ? 1 : 0;
        return "<div class=\"light-bulb-container ui-draggable\" ><div class='light-bulb' style=\"opacity: " + opacity + "; \"></div></div>" +
            "<p>Light: " + this.name + " </p> " +
            "<div class='spectrum-ToggleSwitch'>" +
            "        <input type='checkbox' class='spectrum-ToggleSwitch-input' id='toggle-onoff-1' " + checked + ">" +
            "        <span class='spectrum-ToggleSwitch-switch'></span>" +
            "        <label class='spectrum-ToggleSwitch-label' for='toggle-onoff-1'>" + label + "</label>" +
            "      </div>";
    }
}