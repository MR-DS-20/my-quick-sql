/**
 * Used in queryBuilder to generate WHERE clause of a SQL statement
 */
export class Where {
    
    constructor(
        public field?:string,
        public verb?:string,
        public value?:string
    ){}
}
