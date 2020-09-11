/**
 * Used in queryBuilder to generate WHERE clause of a SQL statement
 */
export declare class Where {
    field?: string;
    verb?: string;
    value?: string;
    constructor(field?: string, verb?: string, value?: string);
}
