"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const base_1 = require("./base");
const functions_module_1 = require("./../functions/functions.module");
/**
 * Builds an UPDATE query with a prodivded object as the data to use fo update
 */
class Update extends base_1.queryBuilder {
    constructor(where, data, table) {
        super();
        this.where = where;
        this.data = data;
        this.table = table;
        this.changeWhereClause(where);
    }
    /**
     * Generates the query string from given table, data, and where
     */
    buildQuery() {
        if (!this.where || !this.data || !this.table) {
            const err = "Bad Request. Required information not provided. Where, Data and Table properties must have values";
            return err;
        }
        else {
            const updateQuery = `UPDATE ${this.table.database}.${this.table.name} SET ${functions_module_1.escape(this.data)} ${this.whereClause}`;
            return updateQuery;
        }
    }
}
exports.Update = Update;
