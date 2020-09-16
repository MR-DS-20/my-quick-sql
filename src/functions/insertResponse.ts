import { Table } from "../database-classes/table";
import { QueryBuilders, functions } from "..";
import { Connection } from "../database-classes/config";

/**
 * Provides either status 200 or the inserted row. assumes that the insertId field name is 'id' + `table_name`.
 * @param res Express res object
 * @param result query result from mysql
 * @param fullRow boolean option if the full inserted row is wanted as a respons. False returns an empty status 200
 * @param table the table of the row which has been inserted, required to retrieve the row
 */
export function insertResponse(res,result,fullRow?:boolean,table?:Table,connection?:Connection,alternateFieldName?:string){
    if(!fullRow){
        res.status(200)
    }else{
        const rowid = result.insertId
        let whereField 
        if(alternateFieldName){
            whereField = alternateFieldName
        }else{
            whereField = 'id'+ table.name
        }
        const where = new QueryBuilders.Where(whereField,'=',rowid)
        const query = new QueryBuilders.Select(['*'],table,where)
        connection.connect(query.buildQuery(),(err,result)=>{
            if(err){
                functions.errorResponse(res,err,'Error Retrieving created object')
            }else{
                functions.selectResponse(res,result)
            }
        })
        
    }
}