export function notAuthResponse(res) {
    res.status(401).json({error:"You have not been authorized to access this service"})
}