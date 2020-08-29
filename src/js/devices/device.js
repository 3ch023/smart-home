/**
 * Base class for devices.
 */
export class Device {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    attachTo(controlPanel) {
        this.controlPanel = controlPanel;
        this.selector = "#" + this.id;
        this.render();
        this.initializeEvents();
        this.self = this.controlPanel.find(this.selector);
    }

    render() {
        let html = "<div class=\"device\" id='" + this.id + "'>" + this.getInnerHtml() + "</div>";
        this.controlPanel.append(html);
    }

    refresh() {
        this.self.html(this.getInnerHtml());
    }

    initializeEvents() {
        console.warn("This method should be overridden by the implementation.");
    }

    getInnerHtml() {
        console.warn("This method should be overridden by the implementation.");
    }
}