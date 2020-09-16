import { Where } from "./where"
import { Table } from "../database-classes/table"
import { queryBuilder } from "./base"
 
/**
 * Builds a standard DELETE query
 */
export class Delete  extends queryBuilder{

    /**
     * 
     * @param where - Where object's field,verb,value params used to filter the rows for deletion
     * @param table - Table object representing the table for the query to be applied to
     */
    constructor(private where:Where, private table:Table){
        super()
        this.changeWhereClause(where)
    }

    /**
     * returns the complete DELETE statement to be passed to SQL engine
     */
    buildQuery(){
        const query:string = `DELETE FROM ${this.table.database}.${this.table.name} ${this.whereClause} `
        return query
    }
}