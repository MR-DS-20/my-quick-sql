"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldsToQueryString = void 0;
/**
 *
 * Returns a string of the fields array to be used in a SELECT statement
 * @param table - Table object to be used to append to field names.
 * @param fields - Converts an Array of fields to a string to be used in the SELECT clause of a SQL statement
 */
function fieldsToQueryString(table, fields) {
    /**
     * fields are appended to this string
     */
    let query = '';
    const tableName = table.name;
    const db = table.database;
    fields.forEach(field => {
        query += `${db}.${tableName}.${field}, `;
    });
    return query.slice(0, -2);
}
exports.fieldsToQueryString = fieldsToQueryString;
