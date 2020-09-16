import { Where } from "./where"
import { Table } from "../database-classes/table"
import { queryBuilder} from './base'
import { escape } from './../functions/functions.module'

/**
 * Builds an INSERT query with a prodivded object as the data to use fo update
 */
 export class Insert extends queryBuilder{
    
    constructor(public data?:Object,public table?:Table){
        super()   
    }

    /**
     * Generates the query string from given table, data
     */
    buildQuery():string{
        if (!this.data || !this.table){
            const err = "Bad Request. Required information not provided. Data and Table properties must have values"
            return err
        }else{
            const updateQuery = `INSERT INTO ${this.table.database}.${this.table.name} SET ${escape(this.data)}`
            return updateQuery
        }
    }
}
        

    


