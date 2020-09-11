import { Table } from "../database-classes/table";
import { Connection } from "../database-classes/config";
/**
 * Provides either status 200 or the inserted row. assumes that the insertId field name is 'id' + `table_name`.
 * @param res Express res object
 * @param rowId the Id of the row that has been updated
 * @param fullRow boolean option if the full inserted row is wanted as a respons. False returns an empty status 200
 * @param table the table of the row which has been inserted, required to retrieve the row
 * @param alternateFieldName allows the choice of field name used in where. defaults to  'id' + table.name whennot provided
 */
export declare function updateResponse(res: any, rowId: number, fullRow?: boolean, table?: Table, connection?: Connection, alternateFieldName?: string): void;
