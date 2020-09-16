import { Table } from "../database-classes/table"

/**
 * 
 * Returns a string of the fields array to be used in a SELECT statement
 * @param table - Table object to be used to append to field names. 
 * @param fields - Converts an Array of fields to a string to be used in the SELECT clause of a SQL statement
 */
export function fieldsToQueryString(table:Table,fields:Array<string>):string{
    /**
     * fields are appended to this string
     */
    let query:string = ''
    const tableName = table.name
    const db = table.database
    fields.forEach(field => {
        query += `${db}.${tableName}.${field}, `
    })

    return query.slice(0,-2)
}