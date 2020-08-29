import {DevicesRegistry} from "./devicesRegistry.js";
let $ = require('jquery');

$(function() {
    let registry = new DevicesRegistry();
    let devices = registry.loadDevices();
    let controlPanel = $('#control-panel');

    attachDevices(controlPanel, devices)
});

function attachDevices(controlPanel, devices) {
    $.each(devices, function (i, device) {
        device.attachTo(controlPanel);
    })
}
