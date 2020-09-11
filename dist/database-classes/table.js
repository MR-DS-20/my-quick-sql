"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
/**
 * Represents the tables held in the SQL database, used in queryBuilders to create SQL statements
 */
class Table {
    /**
     *
     * @param database - Name of the database
     * @param name - Name of the table
     
     */
    constructor(database, name) {
        this.database = database;
        this.name = name;
    }
}
exports.Table = Table;
