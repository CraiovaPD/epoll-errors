"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptional_js_1 = require("exceptional.js");
const default_1 = require("./default");
function load() {
    exceptional_js_1.registerTable(default_1.TABLE);
}
exports.load = load;
