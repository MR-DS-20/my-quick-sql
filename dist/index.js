"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilders = exports.functions = void 0;
const functions = require("./functions/functions.module");
exports.functions = functions;
const QueryBuilders = require("./queryBuilders/queryBuilders.module");
exports.QueryBuilders = QueryBuilders;
/**
 * Connection class for creating a connetion pool to mysql
 */
var config_1 = require("./database-classes/config");
Object.defineProperty(exports, "Connection", { enumerable: true, get: function () { return config_1.Connection; } });
/**
 * Used to model the databse, and help create queries
 */
var table_1 = require("./database-classes/table");
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return table_1.Table; } });
