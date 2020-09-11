"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryBuilder = void 0;
/**
 * Base class that all query builder classes extend from
 */
class queryBuilder {
    constructor() { }
    /**
     *
     * @param newWhere - The Where object to be used to set the whereClause
     */
    changeWhereClause(newWhere) {
        this.whereClause = `WHERE ${newWhere.field} ${newWhere.verb} ${newWhere.value}`;
    }
    get whereClause() {
        return this._whereClause;
    }
    /**
     * Use when you want to manually set the WHERE clause with a string
     */
    set whereClause(clause) {
        this._whereClause = clause;
    }
}
exports.queryBuilder = queryBuilder;
