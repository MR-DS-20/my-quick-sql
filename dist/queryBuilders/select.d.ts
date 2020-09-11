import { Where } from "./where";
import { Table } from "../database-classes/table";
import { queryBuilder } from './base';
/**
 * Builds a standard SELECT query
 */
export declare class Select extends queryBuilder {
    selectFields: Array<string>;
    table: Table;
    where?: Where;
    /**
     *
     * @param selectFields - Array of strings representing fields to be returned from query. Must be present in the MySQL table being queried
     * @param table - Table object reflecting the mySQL table to be queried
     * @param where - Optional Where object use to provide WHERE clause's field verb and value
     */
    constructor(selectFields: Array<string>, table: Table, where?: Where);
    /**
     * Returns a string of the mySQL query statement to be sent to database engine, based on provided params
     */
    buildQuery(): string;
}
