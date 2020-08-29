/**
 * Base class for devices.
 */
export class Device {
    /**
     * Creates a new device instance.
     * @param {String} id - unique identifier of a device
     * @param {String} name - name, displayed on the control panel
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * Attach the device to the control panel. Appends html to the parent block and initializes events for
     * user interactions.
     * @param {jQuery|HTMLElement} controlPanel - parent block for all rendered devices
     */
    attachTo(controlPanel) {
        this.controlPanel = controlPanel;
        this.selector = "#" + this.id;
        if (this.controlPanel.find(this.selector).length !== 0) {
            console.warn("Failed to register device. Not unique id: " + this.id);
            return;
        }
        this.render();
        this.initializeEvents();
    }

    /**
     * Renders the device to the control panel.
     */
    render() {
        let html = "<div class=\"smarthome-device\" id='" + this.id + "'>" + this.getInnerHtml() + "</div>";
        this.controlPanel.append(html);
        this.self = this.controlPanel.find(this.selector);
    }

    /**
     * Substitute html for the device with newly generated to reflect changes in the device state.
     */
    refresh() {
        this.self.html(this.getInnerHtml());
    }

    /**
     * Initialize UI elements with logic for certain device.
     * Should be called only after component is rendered.
     */
    initializeEvents() {
        console.warn("This method should be overridden by the implementation.");
    }

    /**
     * Return html representation of the device.
     */
    getInnerHtml() {
        console.warn("This method should be overridden by the implementation.");
    }
}