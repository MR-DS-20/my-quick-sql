import { Where } from "./where"
import { Table } from "../database-classes/table"
import { fieldsToQueryString } from "../functions/fieldsToQueryString";
import { queryBuilder} from './base'


/**
 * Builds a standard SELECT query
 */
export class Select extends queryBuilder  {
    
    /**
     * 
     * @param selectFields - Array of strings representing fields to be returned from query. Must be present in the MySQL table being queried
     * @param table - Table object reflecting the mySQL table to be queried
     * @param where - Optional Where object use to provide WHERE clause's field verb and value
     */
    constructor(public selectFields:Array<string>, public table:Table,public where?:Where){
        super()
        if(this.where != null){
            this.changeWhereClause(where)  
        }else{
            this.whereClause = ''
        }
    }
        
    /**
     * Returns a string of the mySQL query statement to be sent to database engine, based on provided params
     */
    buildQuery():string{
        const fieldsForQuery = fieldsToQueryString(this.table,this.selectFields)
        const query:string = `SELECT ${fieldsForQuery} FROM ${this.table.database}.${this.table.name} ${this.whereClause}`
        return query
    }
}


 