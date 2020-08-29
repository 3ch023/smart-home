import {Device} from "./device";

export class Thermostat extends Device {
    constructor(id, name, temperature) {
        super(id, name);
        this.temperature = temperature;
    }

    initializeEvents() {
        this.self.on("click", '.spectrum-Stepper-stepUp', (event) => {
            this.temperature = this.temperature + 5;
            this.refresh();
        });
        this.self.on("click", '.spectrum-Stepper-stepDown', (event) => {
            this.temperature = this.temperature - 5;
            this.refresh();
        });
        this.self.find('.spectrum-Textfield-input').on('change', function() {
            this.temperature = this.value;
            this.refresh();
        });
    }

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