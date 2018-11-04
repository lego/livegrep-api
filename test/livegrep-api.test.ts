import { Response, LivegrepAPI } from '../src/livegrep-api'

/**
 * Dummy test
 */
describe('LivegrepAPI', () => {
  it('is makes the request', () => {
    let a: any = LivegrepAPI.search('https://livegrep.com', 'include')
    a.then((resp: Response) => {
      console.log(resp)
    })
  })

  it('is makes the request', () => {
    let a: any = LivegrepAPI.search('https://livegrep.com', 'include')
    a.then((resp: Response) => {
      console.log(resp)
    })
  })
})
