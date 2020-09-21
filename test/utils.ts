import * as util from 'util'

export const inspect = obj => console.log(util.inspect(obj, { showHidden: false, depth: null }))
