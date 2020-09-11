"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateResponse = void 0;
const __1 = require("..");
/**
 * Provides either status 200 or the inserted row. assumes that the insertId field name is 'id' + `table_name`.
 * @param res Express res object
 * @param rowId the Id of the row that has been updated
 * @param fullRow boolean option if the full inserted row is wanted as a respons. False returns an empty status 200
 * @param table the table of the row which has been inserted, required to retrieve the row
 * @param alternateFieldName allows the choice of field name used in where. defaults to  'id' + table.name whennot provided
 */
function updateResponse(res, rowId, fullRow, table, connection, alternateFieldName) {
    if (!fullRow) {
        res.status(200);
    }
    else {
        const rowid = rowId.toString();
        let whereField;
        if (alternateFieldName) {
            whereField = alternateFieldName;
        }
        else {
            whereField = 'id' + table.name;
        }
        const where = new __1.QueryBuilders.Where(whereField, '=', rowid);
        const query = new __1.QueryBuilders.Select(['*'], table, where);
        connection.connect(query.buildQuery(), (err, result) => {
            if (err) {
                __1.functions.errorResponse(res, err, 'Error Retrieving created object');
            }
            else {
                __1.functions.selectResponse(res, result);
            }
        });
    }
}
exports.updateResponse = updateResponse;
