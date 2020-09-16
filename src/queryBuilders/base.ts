import { Where } from "./where"

/**
 * Base class that all query builder classes extend from
 */
export class queryBuilder {

    private _whereClause:string
    constructor(){}

    /**
     * 
     * @param newWhere - The Where object to be used to set the whereClause
     */
    changeWhereClause(newWhere:Where){
        this.whereClause = `WHERE ${newWhere.field} ${newWhere.verb} ${newWhere.value}`
    }

    get whereClause():string{
        return this._whereClause
    }

    /**
     * Use when you want to manually set the WHERE clause with a string
     */
    set whereClause(clause:string){
        this._whereClause = clause
    }
    
}