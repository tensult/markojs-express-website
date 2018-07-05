"use strict";

var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        const topAppBarElement = this.getEl('temporary-drawer');
        this.comp = mdc.drawer.MDCTemporaryDrawer.attachTo(topAppBarElement);
    },
    open: function () {
        this.comp.open = true;
    },
    onDestroy() {
        this.comp && this.comp.destroy();
    }
};
module.exports = comp;
