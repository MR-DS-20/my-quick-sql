import { Where } from "./where"
import { Table } from "../database-classes/table"
import { queryBuilder} from './base'
import { escape } from './../functions/functions.module'

/**
 * Builds an UPDATE query with a prodivded object as the data to use fo update
 */
 export class Update extends queryBuilder{
    
    constructor(private where?:Where,public data?:Object,public table?:Table){
        super()
        this.changeWhereClause(where)
       
    }

    /**
     * Generates the query string from given table, data, and where
     */
    buildQuery():string{
        if (!this.where || !this.data || !this.table){
            const err = "Bad Request. Required information not provided. Where, Data and Table properties must have values"
            return err
        }else{
            const updateQuery = `UPDATE ${this.table.database}.${this.table.name} SET ${escape(this.data)} ${this.whereClause}`
            return updateQuery
        }
        
    }

    
 }


