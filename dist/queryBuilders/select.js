"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const fieldsToQueryString_1 = require("../functions/fieldsToQueryString");
const base_1 = require("./base");
/**
 * Builds a standard SELECT query
 */
class Select extends base_1.queryBuilder {
    /**
     *
     * @param selectFields - Array of strings representing fields to be returned from query. Must be present in the MySQL table being queried
     * @param table - Table object reflecting the mySQL table to be queried
     * @param where - Optional Where object use to provide WHERE clause's field verb and value
     */
    constructor(selectFields, table, where) {
        super();
        this.selectFields = selectFields;
        this.table = table;
        this.where = where;
        if (this.where != null) {
            this.changeWhereClause(where);
        }
        else {
            this.whereClause = '';
        }
    }
    /**
     * Returns a string of the mySQL query statement to be sent to database engine, based on provided params
     */
    buildQuery() {
        const fieldsForQuery = fieldsToQueryString_1.fieldsToQueryString(this.table, this.selectFields);
        const query = `SELECT ${fieldsForQuery} FROM ${this.table.database}.${this.table.name} ${this.whereClause}`;
        return query;
    }
}
exports.Select = Select;
