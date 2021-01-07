import { head } from 'shelljs'
import { AxiosRequestConfig } from './types'

export default function xhr(config:AxiosRequestConfig) {

  const {url,method='get',data=null,headers} = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(),url,true)

  request.onreadystatechange = function handleLoad() {
    if(request.readyState !== 4) {
      return
    }

  }


  Object.keys(headers).forEach(name=>{
    if(data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    }else {
      request.setRequestHeader(name,headers[name])
    }
  })


  request.send(data)

  return request
}
