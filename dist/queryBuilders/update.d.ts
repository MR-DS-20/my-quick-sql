import { Where } from "./where";
import { Table } from "../database-classes/table";
import { queryBuilder } from './base';
/**
 * Builds an UPDATE query with a prodivded object as the data to use fo update
 */
export declare class Update extends queryBuilder {
    private where?;
    data?: Object;
    table?: Table;
    constructor(where?: Where, data?: Object, table?: Table);
    /**
     * Generates the query string from given table, data, and where
     */
    buildQuery(): string;
}
