"use strict";

var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('top-bar');
        this.comp = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);
    },
    menu: function (...args) {
        this.emit('menu', ...args);
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
