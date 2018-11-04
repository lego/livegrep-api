import Promise from 'bluebird'
import request from 'request'
import querystring from 'querystring'

export interface Info {
  re2_time: number
  git_time: number
  sort_time: number
  index_time: number
  analyze_time: number
  why: string
}

export interface Response {
  info: Info
  search_type: string
  results: Array<Result>
}

export interface Result {
  tree: string
  version: string
  path: string
  lineno: number
  context_before: Array<string>
  context_after: Array<string>
  bounds: Array<number>
  line: string
}

export class LivegrepAPI {
  static search(url: string, query: string, backend?: string): Promise<Response> {
    var url: string = `${url}/api/v1/search`
    if (backend) {
      url += '/' + backend
    }
    var qs: string = querystring.escape(query)
    url += '?q=' + qs

    return new Promise(function(resolve, reject) {
      request(url, function(error, response, body) {
        if (error || response.statusCode != 200) {
          reject({ error, response, body })
        }
        resolve(body)
      })
    })
  }
}

export default LivegrepAPI
