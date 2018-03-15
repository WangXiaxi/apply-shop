import axios from 'axios'
import {URL} from './config'

/** 获取文章列表 **/
export function getApplyList (page) {
  const url = URL + '/api/getApplyList'
  const data = Object.assign({}, {
    page: page,
    limit: 8
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    console.log(res)
    return Promise.resolve(res.data)
  })
}

getApplyList(1)
