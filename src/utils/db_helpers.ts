import * as _ from 'lodash'

export function isValidId(id: number | null | undefined) {
    return _.isNumber(id) && id !== 0
}
