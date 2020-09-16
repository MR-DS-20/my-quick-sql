/**
 * Represents the tables held in the SQL database, used in queryBuilders to create SQL statements
 */
export class Table {

    /**
     * 
     * @param database - Name of the database
     * @param name - Name of the table
     
     */
    constructor(
        public database:string,
        public name:string,    
    ){}
    
    /*** @param fields - To be used to present the fields of the database in string format, which can be added to a query
     *                 - Use a key value pair where they key is what you want to represent the field, and the value matches the field name in MySQL, so it can be used in query strings. 
     *  */
    public fields:any
}
