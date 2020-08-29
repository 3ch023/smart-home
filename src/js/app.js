require('../css/style.css');
import {DevicesRegistry} from "./devicesregistry.js";
let $ = require('jquery');

/**
 * Starts the app. Loads devices from registry and attaching to the control panel
 */
$(function() {
    let registry = new DevicesRegistry();
    let devices = registry.loadDevices();
    let controlPanel = $('#control-panel');

    attachDevices(controlPanel, devices);
});

/**
 * Gets the panel for the provided component. If the panel doesn't exist it will be created and appended to the
 * App's container.
 * @param {jQuery|HTMLElement} controlPanel - parent block for all rendered devices
 * @param {Array} devices - objects provided by registry that should be displayed on the control panel
 */
function attachDevices(controlPanel, devices) {
    $.each(devices, function (i, device) {
        device.attachTo(controlPanel);
    })
}
