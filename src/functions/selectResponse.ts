import { errorResponse} from './errorResponse'
export function selectResponse(res,result?):any{
    res.json(result)
}