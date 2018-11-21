"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_NAMESPACE = 'default';
exports.USER_NAMESPACE = 'users';
exports.BUSINESS_NAMESPACE = 'business';
exports.CALENDAR_NAMESPACE = 'calendar';
exports.ASSETS_NAMESPACE = 'assets';
exports.NOTIFICATIONS_NAMESPACE = 'notifications';
exports.PAYMENTS_NAMESPACE = 'payments';
exports.ADMIN_NAMESPACE = 'admin';
exports.ANALYTICS_NAMESPACE = 'analytics';
const index_1 = require("./locales/ro/index");
const index_2 = require("./locales/en/index");
// load locales
function loadNovabookerErrors() {
    index_1.load();
    index_2.load();
}
exports.loadNovabookerErrors = loadNovabookerErrors;
exports.default = loadNovabookerErrors;
