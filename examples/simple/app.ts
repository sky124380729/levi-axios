import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2,
    c: ['x','y'],
    d: {
      s:'1',
      t:'2'
    }
  }
})


axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})


axios({
  method: 'post',
  url: '/base/buffer',
  data: new Int32Array([21, 31])
})
