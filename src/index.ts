import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

function axios(config:AxiosRequestConfig) {
  processConfig(config)
  return xhr(config)
}

function processConfig(config:AxiosRequestConfig):void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config:AxiosRequestConfig):string {
  const {url,params} = config
  return buildURL(url,params)
}

function transformHeaders (config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformRequestData(config:AxiosRequestConfig):any {
  return transformRequest(config.data)
}

export default axios
