import { Where } from "./where";
import { Table } from "../database-classes/table";
import { queryBuilder } from "./base";
/**
 * Builds a standard DELETE query
 */
export declare class Delete extends queryBuilder {
    private where;
    private table;
    /**
     *
     * @param where - Where object's field,verb,value params used to filter the rows for deletion
     * @param table - Table object representing the table for the query to be applied to
     */
    constructor(where: Where, table: Table);
    /**
     * returns the complete DELETE statement to be passed to SQL engine
     */
    buildQuery(): string;
}
