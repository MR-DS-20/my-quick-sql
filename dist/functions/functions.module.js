"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeId = exports.escape = void 0;
const mysql_1 = require("mysql");
var fieldsToQueryString_1 = require("./fieldsToQueryString");
Object.defineProperty(exports, "fieldsToQueryString", { enumerable: true, get: function () { return fieldsToQueryString_1.fieldsToQueryString; } });
var errorResponse_1 = require("./errorResponse");
Object.defineProperty(exports, "errorResponse", { enumerable: true, get: function () { return errorResponse_1.errorResponse; } });
var selectResponse_1 = require("./selectResponse");
Object.defineProperty(exports, "selectResponse", { enumerable: true, get: function () { return selectResponse_1.selectResponse; } });
var insertResponse_1 = require("./insertResponse");
Object.defineProperty(exports, "insertResponse", { enumerable: true, get: function () { return insertResponse_1.insertResponse; } });
var updateResponse_1 = require("./updateResponse");
Object.defineProperty(exports, "updateResponse", { enumerable: true, get: function () { return updateResponse_1.updateResponse; } });
var notAuthResponse_1 = require("./notAuthResponse");
Object.defineProperty(exports, "notAuthResponse", { enumerable: true, get: function () { return notAuthResponse_1.notAuthResponse; } });
function escape(input) {
    return mysql_1.escape(input);
}
exports.escape = escape;
function escapeId(input) {
    return mysql_1.escapeId(input);
}
exports.escapeId = escapeId;
