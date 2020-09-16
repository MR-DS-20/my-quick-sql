"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mysql_1 = require("mysql");
/**
 * Uses config object to create a connection pool on construction.
 */
class Connection {
    /**
     * A pool of connections is prepared on construction using config provided
     * @param config - PoolConfig type from mysql module.
     *               - Needs minimum of : {host:string,port:number,user:string,password:string,database:string}
     */
    constructor(config) {
        this.config = config;
        this.debugMode = true;
        this.pool = mysql_1.createPool(config);
    }
    /**
     * Displays given error mesage and object in cosole if debugmode is set to true. debugMode=true is default.
     * @param message message to be displayed
     * @param object typically err object passed from DB engine
     */
    debug(message, object) {
        if (this.debugMode) {
            console.log(`${message} ::`, object);
        }
    }
    /**
     * Uses a connection from pool to excecute query, and calls callback with err or result
     * @param query - SQL statemnt string to be passed to SQL engine using a connection from pool
     * @param callback - Called with (err,result) with the response from the SQL engine
     */
    connect(query, callback) {
        this.pool.getConnection((err, connection) => {
            if (err) {
                // connection.release()
                this.debug('Database connection error', err);
                callback(err, null);
            }
            else {
                console.log('Querying DB:', query);
                connection.query(query, (err, result) => {
                    if (err) {
                        this.debug('Query Error:', err);
                        callback(err, null);
                    }
                    else {
                        callback(null, result);
                    }
                });
            }
        });
    }
}
exports.Connection = Connection;
