"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptional_js_1 = require("exceptional.js");
const default_1 = require("./default");
const users_1 = require("./users");
function load() {
    exceptional_js_1.registerTable(default_1.TABLE);
    exceptional_js_1.registerTable(users_1.TABLE);
}
exports.load = load;
