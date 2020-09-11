/**
 * Represents the tables held in the SQL database, used in queryBuilders to create SQL statements
 */
export declare class Table {
    database: string;
    name: string;
    model?: Object;
    /**
     *
     * @param database - Name of the database
     * @param name - Name of the table
     * @param fields - To be used as the model of the table.
     *               - Set this with an object whose class properties define the fields of the respective table, and nothing else
     */
    constructor(database: string, name: string, model?: Object);
}
