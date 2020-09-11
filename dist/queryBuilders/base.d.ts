import { Where } from "./where";
/**
 * Base class that all query builder classes extend from
 */
export declare class queryBuilder {
    private _whereClause;
    constructor();
    /**
     *
     * @param newWhere - The Where object to be used to set the whereClause
     */
    changeWhereClause(newWhere: Where): void;
    get whereClause(): string;
    /**
     * Use when you want to manually set the WHERE clause with a string
     */
    set whereClause(clause: string);
}
