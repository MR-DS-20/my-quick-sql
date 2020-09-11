import { Table } from "../database-classes/table";
import { Connection } from "../database-classes/config";
/**
 * Provides either status 200 or the inserted row. assumes that the insertId field name is 'id' + `table_name`.
 * @param res Express res object
 * @param result query result from mysql
 * @param fullRow boolean option if the full inserted row is wanted as a respons. False returns an empty status 200
 * @param table the table of the row which has been inserted, required to retrieve the row
 */
export declare function insertResponse(res: any, result: any, fullRow?: boolean, table?: Table, connection?: Connection, alternateFieldName?: string): void;
