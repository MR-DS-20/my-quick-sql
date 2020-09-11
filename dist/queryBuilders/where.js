"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Where = void 0;
/**
 * Used in queryBuilder to generate WHERE clause of a SQL statement
 */
class Where {
    constructor(field, verb, value) {
        this.field = field;
        this.verb = verb;
        this.value = value;
    }
}
exports.Where = Where;
