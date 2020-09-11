"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
const base_1 = require("./base");
/**
 * Builds a standard DELETE query
 */
class Delete extends base_1.queryBuilder {
    /**
     *
     * @param where - Where object's field,verb,value params used to filter the rows for deletion
     * @param table - Table object representing the table for the query to be applied to
     */
    constructor(where, table) {
        super();
        this.where = where;
        this.table = table;
        this.changeWhereClause(where);
    }
    /**
     * returns the complete DELETE statement to be passed to SQL engine
     */
    buildQuery() {
        const query = `DELETE FROM ${this.table.database}.${this.table.name} ${this.whereClause} `;
        return query;
    }
}
exports.Delete = Delete;
