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
     * @param fields - To be used as the model of the table.
     *               - Set this with an object whose class properties define the fields of the respective table, and nothing else
     */
    constructor(database, name, model) {
        this.database = database;
        this.name = name;
        this.model = model;
    }
}
exports.Table = Table;
