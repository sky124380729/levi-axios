import { isPlainObject } from './utils'

export function transformRequest(data:any):any {
  if(isPlainObject(data)) {
    data = JSON.stringify(data)
  }
  return data
}
