import { Table } from "../database-classes/table";
import { queryBuilder } from './base';
/**
 * Builds an INSERT query with a prodivded object as the data to use fo update
 */
export declare class Insert extends queryBuilder {
    data?: Object;
    table?: Table;
    constructor(data?: Object, table?: Table);
    /**
     * Generates the query string from given table, data
     */
    buildQuery(): string;
}
