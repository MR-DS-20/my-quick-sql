"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notAuthResponse = void 0;
function notAuthResponse(res) {
    res.status(401).json({ error: "You have not been authorized to access this service" });
}
exports.notAuthResponse = notAuthResponse;
