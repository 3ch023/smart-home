import {Device} from "./device";

export class Light extends Device {
    constructor(id, name, power) {
        super(id, name);
        this.power = power;
    }

    initializeEvents() {
        this.controlPanel.on("click", this.selector, (event) => {
            this.power = !this.power;
            this.refresh();
        });
    }

    getInnerHtml() {
        let checked = this.power ? 'checked' : '';
        let label = this.power ? 'On' : 'Off';
        return "<h3>Light: " + this.name + " </h3> " +
            "<div class=\"spectrum-ToggleSwitch\">\n" +
            "        <input type=\"checkbox\" class=\"spectrum-ToggleSwitch-input\" id=\"toggle-onoff-1\" " + checked + ">" +
            "        <span class=\"spectrum-ToggleSwitch-switch\"></span>\n" +
            "        <label class=\"spectrum-ToggleSwitch-label\" for=\"toggle-onoff-1\">" + label + "</label>\n" +
            "      </div>";
    }
}