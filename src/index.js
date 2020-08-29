import _ from 'lodash';

$(function() {
    // Create the views (DOM insertions) when the DOM is ready
    var roomModels = App.createRooms(roomNameList);
    App.setupSwitchboard(roomModels);
    App.setupPlan(roomModels);
});

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['bye', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());