"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertResponse = void 0;
const __1 = require("..");
/**
 * Provides either status 200 or the inserted row. assumes that the insertId field name is 'id' + `table_name`.
 * @param res Express res object
 * @param result query result from mysql
 * @param fullRow boolean option if the full inserted row is wanted as a respons. False returns an empty status 200
 * @param table the table of the row which has been inserted, required to retrieve the row
 */
function insertResponse(res, result, fullRow, table, connection, alternateFieldName) {
    if (!fullRow) {
        res.status(200);
    }
    else {
        const rowid = result.insertId;
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
exports.insertResponse = insertResponse;
