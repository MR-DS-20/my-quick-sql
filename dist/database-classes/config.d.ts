/**
 * Uses config object to create a connection pool on construction.
 */
export declare class Connection {
    private config;
    debugMode: boolean;
    /**
     * Used for the pool object created by the mysql module
     */
    pool: any;
    /**
     * A pool of connections is prepared on construction using config provided
     * @param config - PoolConfig type from mysql module.
     *               - Needs minimum of : {host:string,port:number,user:string,password:string,database:string}
     */
    constructor(config: any);
    /**
     * Displays given error mesage and object in cosole if debugmode is set to true. debugMode=true is default.
     * @param message message to be displayed
     * @param object typically err object passed from DB engine
     */
    private debug;
    /**
     * Uses a connection from pool to excecute query, and calls callback with err or result
     * @param query - SQL statemnt string to be passed to SQL engine using a connection from pool
     * @param callback - Called with (err,result) with the response from the SQL engine
     */
    connect(query: string, callback: (err: any, result: any) => void): any;
}
