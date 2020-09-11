import { Table } from "../database-classes/table";
/**
 * whyyyyyyyyy
 * Returns a string of the fields array to be used in a SELECT statement
 * @param table - Table object to be used to append to field names.
 * @param fields - Converts an Array of fields to a string to be used in the SELECT clause of a SQL statement
 */
export declare function fieldsToQueryString(table: Table, fields: Array<string>): string;
