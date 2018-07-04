"use strict";
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
    },
    menu: function () {
        this.getComponent('drawer').open();
    },
    play: function () {
        this.getComponent('editor').play();
    }
};
module.exports = comp;
