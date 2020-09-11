"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Insert = void 0;
const base_1 = require("./base");
const functions_module_1 = require("./../functions/functions.module");
/**
 * Builds an INSERT query with a prodivded object as the data to use fo update
 */
class Insert extends base_1.queryBuilder {
    constructor(data, table) {
        super();
        this.data = data;
        this.table = table;
    }
    /**
     * Generates the query string from given table, data
     */
    buildQuery() {
        if (!this.data || !this.table) {
            const err = "Bad Request. Required information not provided. Data and Table properties must have values";
            return err;
        }
        else {
            const updateQuery = `INSERT INTO ${this.table.database}.${this.table.name} SET ${functions_module_1.escape(this.data)}`;
            return updateQuery;
        }
    }
}
exports.Insert = Insert;
