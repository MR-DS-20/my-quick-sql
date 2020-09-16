import { escape as esc, escapeId as escId} from 'mysql'

export { fieldsToQueryString } from "./fieldsToQueryString"


export { errorResponse } from './errorResponse'
export {selectResponse} from './selectResponse'
export { insertResponse} from './insertResponse'
export {updateResponse} from './updateResponse'
export { notAuthResponse} from './notAuthResponse'

export function escape(input:any):string{
    return esc(input)
}

export function escapeId(input:any):string{
    return escId(input)
}
